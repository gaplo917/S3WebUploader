import * as AWS from 'aws-sdk';
// tslint:disable-next-line:max-line-length
import { ListBucketsOutput, ListObjectsOutput, GetObjectOutput, PutObjectRequest, PutObjectOutput } from 'aws-sdk/clients/s3';
import { ElectronJobManager } from './job-manager';
import { IAccount } from './model';
import { MessageBus } from './message-bus'
import { Injectable } from '@angular/core'

AWS.config.apiVersions = {
    s3: '2006-03-01',
};

@Injectable({
  providedIn: 'root',
})
export class ElectronS3Service {
    constructor(private messageBus: MessageBus, private jobs: ElectronJobManager) {
        this.messageBus.on('S3-ListBuckets', (event: string, arg: IAccount) => {
            this.listBuckets(arg).then((result) => {
                this.messageBus.send('S3-BucketsListed', { account: arg, buckets: result.Buckets });
            });
        });
        this.messageBus.on('S3-ListObjects', (event: string, arg: any) => {
            this.listObjects(arg.account, arg.bucket, arg.prefix);
        });
        this.messageBus.on('S3-RequestDownload', (event: string, arg: any) => {
            this.downloadFile(arg.jobID, arg.account, arg.bucket, arg.key, arg.saveTo);
        });
        this.messageBus.on('S3-RequestBulkUpload', (event: string, arg: any) => {
            this.bulkUpload(arg.files, arg.parents);
        });
    }

    private downloadFile(jobID: string, account: IAccount, bucket: string, key: string, saveTo = '') {
      const s3 = this.createS3Instance(account);
      const params = {
        Bucket: bucket,
        Key: key,
        Expires: 15,
      };
      s3.getSignedUrl('getObject', params, (err, url) => {
        if (err) {
          // SharedService.showError(params, err);
        } else {
          window.open(url, '_blank');
        }
      });
    }

    private bulkUpload(files: Array<{
        jobID: string, account: IAccount, bucket: string, filePath: string, newPath: string, file: any
        // tslint:disable-next-line:align
    }>, location: string[]) {
        let jobs: Array<Promise<any>> = [];
        // TODO: consolidate/reformat files array, they all belong to 1 account anyway
        // Temporary: just take the first file's account as the result
        let account: IAccount;
        if (files.length) {
            account = files[0].account;
        }
        files.forEach((f) => {
            let file = f.file
            let r = this.upload(f.account, f.bucket, f.newPath, file);
            // tslint:disable-next-line:max-line-length
            let resultPromise = this.jobs.addManagedUploadJob(f.jobID, 'upload', r.request, file.name, f.newPath, f.filePath);
            let parents = [f.account.id, f.bucket].concat(f.newPath.split('/'));
            parents.splice(parents.length - 1, 1);
            parents = this.pruneParentsArray(parents);
            jobs.push(
                resultPromise.then((_) => {
                    this.messageBus.send('S3-UploadSuccessful', { account: f.account, parents, filename: file.name });
                    return Promise.resolve(_);
                }).catch((err) => {
                    this.messageBus.send('S3-UploadFailed', { account: f.account, parents, filename: file.name });
                    return Promise.reject(err);
                }),
            );
        });
        Promise.all(jobs).then(() => {
            // tslint:disable-next-line:max-line-length
            this.messageBus.send('S3-BulkUploadCompleted', { account, parents: this.pruneParentsArray(location) });
        }).catch((err) => {
            this.messageBus.send('S3-BulkUploadFailed', { account, parents: this.pruneParentsArray(location) });
        });
    }

    private listObjects(account: IAccount, bucket: string, prefix: string, delimiter = '/') {
        let parents = [account.id, bucket].concat(prefix.split('/'));
        parents = this.pruneParentsArray(parents);
        this.messageBus.send('S3-ListingObjects', { parents, prefix });
        this.listObjectsReq(account, bucket, prefix, delimiter).then((result) => {
            // tslint:disable-next-line:max-line-length
            this.messageBus.send('S3-ObjectListed', { account, parents, objects: result.Contents, folders: result.CommonPrefixes });
        }).catch((err) => {
            this.messageBus.send('S3-OperationFailed', { account, parents, error: err });
        });
    }

    private createS3Instance(acc: IAccount): AWS.S3 {
        let s3: AWS.S3;
        if (acc.url) {
            s3 = new AWS.S3({
                endpoint: acc.url,
                credentials: new AWS.Credentials(acc.id, acc.secret),
                s3ForcePathStyle: true, // needed with minio?
                signatureVersion: 'v4'
            });
        } else {
            s3 = new AWS.S3({
                credentials: new AWS.Credentials(acc.id, acc.secret),
                s3ForcePathStyle: true, // needed with minio?
                signatureVersion: 'v4'
            });
        }
        return s3;
    }

    private listBuckets(account: IAccount): Promise<ListBucketsOutput> {
        let promise = new Promise<ListBucketsOutput>((resolve, reject) => {
            let s3 = this.createS3Instance(account);
            s3.listBuckets((err, data) => {
                if (err) { reject(err); } else { resolve(data); }
            });
        });
        return promise;
    }

    // tslint:disable-next-line:max-line-length
    private listObjectsReq(account: IAccount, bucket: string, prefix: string, delimiter = '/'): Promise<ListObjectsOutput> {
        let promise = new Promise<ListObjectsOutput>((resolve, reject) => {
            let params = {
                Bucket: bucket,
                Prefix: prefix,
                Delimiter: delimiter,
            };
            let s3 = this.createS3Instance(account);
            s3.listObjectsV2(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    if (data.Contents) {
                        data.Contents = data.Contents.filter((_) => _.Key !== prefix);
                        data.Contents.forEach((c) => {
                            c.Key = c.Key.replace(prefix, '');
                        });
                    }
                    resolve(data);
                }
            });
        });
        return promise;
    }

    // tslint:disable-next-line:max-line-length
    private getObject(account: IAccount, bucket: string, key: string): { result: Promise<GetObjectOutput>, request: AWS.Request<GetObjectOutput, AWS.AWSError> } {
        let req;
        let promise = new Promise<GetObjectOutput>((resolve, reject) => {
            let params = {
                Bucket: bucket,
                Key: key,
            };
            let s3 = this.createS3Instance(account);
            req = s3.getObject(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
        return { result: promise, request: req };
    }

    private upload(account: IAccount, bucket: string, key: string, data: Buffer): { request: AWS.S3.ManagedUpload } {
        let req;
        let params = {
            Body: data,
            Bucket: bucket,
            Key: key,
        };
        let s3 = this.createS3Instance(account);
        req = s3.upload(params);
        return { request: req };
    }

    private pruneParentsArray(parents: string[]): string[] {
        let res = parents.slice();
        if (res[res.length - 1] === '') {
            res.splice(res.length - 1, 1);
        }
        return res;
    }
}
