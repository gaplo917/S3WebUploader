import { Injectable, EventEmitter } from '@angular/core'
import { ElectronService } from 'src/app/infrastructure/services/electron.service'
import * as uuid from 'uuid'
import { BehaviorSubject, Observable } from 'rxjs'
import { IAccount } from 'src/app/services/model'
import { S3Item } from 'src/app/aws-s3/s3-item'

@Injectable({
  providedIn: 'root',
})
export class S3Service {
  RefreshingObjects: EventEmitter<{ parents: string[] }> = new EventEmitter<{ parents: string[] }>()
  ItemsEnumerated: EventEmitter<{ account: IAccount; parents: string[]; items: S3Item[] }> = new EventEmitter<{
    account: IAccount
    parents: string[]
    items: S3Item[]
  }>()

  ItemAdded: EventEmitter<{ parents: string[]; item: S3Item }> = new EventEmitter<{ parents: string[]; item: S3Item }>()
  DownloadPath: Observable<string>
  private _cachedItems: { [key: string]: S3Item[] } = {}
  private _cachedAccounts: { [key: string]: IAccount } = {}
  private _downloadPath = new BehaviorSubject('')
  constructor(private electron: ElectronService) {
    this.DownloadPath = this._downloadPath.asObservable()
  }

  init() {
    this.electron.onCD('S3-BucketsListed', (event: string, arg: any) => {
      const buckets: S3Item[] = []
      arg.buckets.forEach(b => {
        buckets.push({
          type: 'bucket',
          name: b.Name,
        })
      })
      this.ItemsEnumerated.emit({
        account: arg.account,
        parents: [arg.account.id],
        items: buckets,
      })
    })
    this.electron.onCD('S3-ObjectListed', (event: string, arg: any) => {
      let items: S3Item[] = []
      if (arg.objects) {
        items = arg.objects.map(_ => {
          return {
            name: _.Key,
            type: 'file',
            size: _.Size,
            Etag: _.ETag,
            LastModified: _.LastModified,
            Metadata: _.Metadata,
            ContentType: _.ContentType,
            StorageClass: _.StorageClass,
          }
        })
      }
      if (arg.folders) {
        items = items.concat(
          arg.folders.map(_ => {
            return {
              type: 'folder',
              name: _.Prefix.substring(0, _.Prefix.length - 1)
                .split('/')
                .pop(),
              Etag: _.ETag,
              LastModified: _.LastModified,
              Metadata: _.Metadata,
              ContentType: _.ContentType,
              StorageClass: _.StorageClass,
            }
          }),
        )
      }
      this._cachedItems[arg.parents.join('/')] = items
      this._cachedAccounts[arg.parents[0]] = arg.account
      this.ItemsEnumerated.emit({
        account: arg.account,
        parents: arg.parents,
        items: items,
      })
    })
    this.electron.onCD('S3-OperationFailed', (event: string, arg: any) => {
      this.ItemsEnumerated.emit({
        account: arg.account,
        parents: arg.parents,
        items: [],
      })
    })
    this.electron.onCD('S3-UploadSuccessful', (event: string, arg: any) => {})
    this.electron.onCD('S3-BulkUploadCompleted', (event: string, arg: any) => {
      const params = this.getS3Parameters(arg.parents)
      this.listObjects(arg.account, params.bucket, params.prefix)
    })
    this.electron.onCD('S3-BulkUploadFailed', (event: string, arg: any) => {
      const params = this.getS3Parameters(arg.parents)
      this.listObjects(arg.account, params.bucket, params.prefix)
    })
    this.electron.onCD('S3-ListingObjects', (event: string, arg: any) => {
      this.RefreshingObjects.emit(arg)
    })
  }

  getCachedItems(key: string): S3Item[] {
    const items = this._cachedItems[key]
    if (items) {
      return items
    } else {
      return []
    }
  }

  getCachedAccount(key: string): IAccount {
    const acc = this._cachedAccounts[key]
    return acc
  }

  listBuckets(account: IAccount) {
    this.electron.send('S3-ListBuckets', account)
  }

  listObjects(account: IAccount, bucket: string, prefix = '') {
    this.electron.send('S3-ListObjects', { account: account, bucket: bucket, prefix: prefix })
  }

  requestDownload(account: IAccount, bucket: string, key: string): string {
    const id = uuid.v4()
    this.electron.send('S3-RequestDownload', {
      jobID: id,
      account: account,
      bucket: bucket,
      key: key,
      saveTo: this._downloadPath.value,
    })
    return id.toString()
  }

  requestBulkUpload(
    account: IAccount,
    bucket: string,
    prefix: string,
    items: Array<{ filePath: string; newPath: string; file: any }>,
  ) {
    const files = items.map(item => {
      const id = uuid.v4()
      return {
        account: account,
        bucket: bucket,
        filePath: item.filePath,
        newPath: item.newPath,
        jobID: id,
        file: item.file,
      }
    })
    this.electron.send('S3-RequestBulkUpload', {
      files: files,
      parents: [account.id, bucket].concat(prefix.split('/')),
    })
  }

  private getS3Parameters(parents: string[]): { account: string; bucket: string; prefix: string } {
    if (parents.length < 2) {
      return null
    }
    const account = parents[0]
    const bucket = parents[1]
    const prefix = parents.slice(2, parents.length).join('/')
    return { account: account, bucket: bucket, prefix: prefix ? prefix + '/' : '' }
  }
}
