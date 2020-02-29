import * as AWS from 'aws-sdk'
import { Injectable } from '@angular/core'
import { MessageBus } from 'src/app/services/message-bus'
import { IAccount } from 'src/app/services/model'
import { createS3Instance } from 'src/app/services/s3'

@Injectable({
  providedIn: 'root',
})
export class ElectronAWSService {
  constructor(private messageBus: MessageBus) {
    this.messageBus.on('AWS-InitAccount', (event: string, arg: IAccount) => {
      this.testAccount(arg).then(success => {
        if (success) {
          this.messageBus.send('AWS-AccountInitialized', arg)
        }
      })
    })
    this.messageBus.on('AWS-TestAccount', (event: string, arg: IAccount) => {
      this.testAccount(arg).then(success => {
        if (success) {
          this.messageBus.send('AWS-CredentialFound', arg)
        } else {
          this.messageBus.send('AWS-CredentialNotFound', arg)
        }
      })
    })
  }

  private testAccount(account: IAccount): Promise<boolean> {
    const s3 = createS3Instance(account)
    return new Promise<boolean>((resolve, reject) => {
      if (account.initialBucket) {
        s3.listObjects(
          {
            Bucket: account.initialBucket,
          },
          (err, data) => {
            if (err) {
              resolve(false)
            } else {
              resolve(true)
            }
          },
        )
      } else {
        s3.listBuckets((err, data) => {
          if (err) {
            resolve(false)
          } else {
            resolve(true)
          }
        })
      }
    })
  }
}
