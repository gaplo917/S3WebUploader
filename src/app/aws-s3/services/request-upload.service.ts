import { Injectable } from '@angular/core'
import { DomService } from 'src/app/infrastructure/services/dom.service'
import { S3Service } from 'src/app/aws-s3/services/s3.service'
import { IAccount } from 'src/app/services/model'
import { UploadItem } from 'src/app/aws-s3/upload-item'
import { ConfirmUploadComponent } from 'src/app/aws-s3/confirm-upload/confirm-upload.component'

@Injectable({
  providedIn: 'root',
})
export class RequestUploadService {
  toPrompt = true
  constructor(private dom: DomService, private s3: S3Service) {}

  init() {}

  requestUpload(account: IAccount, bucket: string, prefix: string, items: UploadItem[]) {
    if (this.toPrompt) {
      const comp = this.dom.appendComponentToBody(ConfirmUploadComponent)
      comp.instance.account = account
      comp.instance.bucket = bucket
      comp.instance.prefix = prefix
      comp.instance.Items = items
      comp.instance.promptSetting = this.toPrompt
      comp.instance.toClose.subscribe(_ => {
        comp.destroy()
      })
    } else {
      const files = items.map(_ => {
        return {
          filePath: _.path,
          newPath: `${prefix}${_.newName}`,
          file: _.file,
        }
      })
      this.s3.requestBulkUpload(account, bucket, prefix, files)
    }
  }
}
