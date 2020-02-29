import * as AWS from 'aws-sdk'
import { MessageBus } from 'src/app/services/message-bus'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ElectronJobManager {
  private jobs: { [key: string]: AWS.Request<any, any> | AWS.S3.ManagedUpload } = {}
  private jobsProgress: { [key: string]: number } = {}
  constructor(private messageBus: MessageBus) {
    this.messageBus.on('Jobs-Abort', (event: string, arg: any) => {
      this.stopJob(arg.id)
    })
  }

  public initialize() {}

  // tslint:disable-next-line:max-line-length
  public addJob(id: string, type: string, request: AWS.Request<any, any>, from: string, to: string, localFile: string) {
    this.jobs[id] = request
    this.messageBus.send('Jobs-Created', { id, type, from, to, localFile })
    if (request) {
      request.on('success', () => {
        this.completeJob(id)
      })
      request.on('error', resp => {
        this.failJob(id, resp)
      })
      if (type === 'download') {
        request.on('httpDownloadProgress', p => {
          this.reportProgress(id, p.loaded, p.total)
        })
      } else {
        request.on('httpUploadProgress', p => {
          this.reportProgress(id, p.loaded, p.total)
        })
      }
    }
  }

  // tslint:disable-next-line:max-line-length
  public addManagedUploadJob(
    id: string,
    type: string,
    request: AWS.S3.ManagedUpload,
    from: string,
    to: string,
    localFile: string,
  ): Promise<any> {
    this.jobs[id] = request
    this.messageBus.send('Jobs-Created', { id, type, from, to, localFile })
    if (request) {
      request.on('httpUploadProgress', p => {
        this.reportProgress(id, p.loaded, p.total)
      })
      return request.promise().then(
        data => {
          this.completeJob(id)
          return Promise.resolve(data)
        },
        err => {
          this.failJob(id, err)
          return Promise.reject(err)
        },
      )
    }
    return Promise.reject(new Error('Attempt to add job with no request'))
  }

  public completeJob(id: string) {
    if (this.jobs[id] !== undefined) {
      this.messageBus.send('Jobs-Completed', { id })
      delete this.jobs[id]
    }
  }

  public failJob(id: string, error: AWS.AWSError) {
    if (this.jobs[id] !== undefined) {
      this.messageBus.send('Jobs-Failed', { id, error: error.message })
      delete this.jobs[id]
      delete this.jobsProgress[id]
    }
  }

  public reportProgress(id: string, loaded: number, total: number) {
    if (this.jobs[id] !== undefined) {
      const percentage = Math.round((loaded / total) * 100)
      if (!this.jobsProgress[id] || this.jobsProgress[id] < percentage) {
        this.jobsProgress[id] = percentage
        this.messageBus.send('Jobs-Progress', { id, percentage, loaded, total })
      }
    }
  }

  public stopJob(id: string) {
    if (this.jobs[id] !== undefined) {
      this.jobs[id].abort()
    }
  }
}
