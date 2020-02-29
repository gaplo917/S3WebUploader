import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { ElectronService } from 'src/app/infrastructure/services/electron.service'
import { Job } from 'src/app/job-view/job'
import { JobType } from 'src/app/job-view/job-type'
import { JobStatus } from 'src/app/job-view/job-status'

@Injectable({
  providedIn: 'root',
})
export class JobService {
  Jobs: Observable<Job[]>
  private _jobs = new BehaviorSubject<Job[]>([])
  private _jobObj = {}
  private _jobList: Job[] = []
  constructor(private electron: ElectronService) {
    this.Jobs = this._jobs.asObservable()
  }

  init() {
    this.electron.onCD('Jobs-Created', (event, arg) => {
      let type = JobType.Download
      if (arg.type === 'upload') {
        type = JobType.Upload
      }
      this.createJob(type, arg.id, arg.from, arg.to, arg.localFile)
    })
    this.electron.onCD('Jobs-Completed', (event, arg) => {
      this.updateJobStatus(arg.id, JobStatus.Completed)
    })
    this.electron.onCD('Jobs-Failed', (event, arg) => {
      this.updateJobStatus(arg.id, JobStatus.Failed)
      this.updateJobMessage(arg.id, arg.error)
    })
    this.electron.onCD('Jobs-Progress', (event, arg) => {
      this.updatePercentage(arg.id, arg.percentage, arg.loaded, arg.total)
    })
  }

  clearNotRunningJobs() {
    const idToDelete = []
    this._jobList.forEach(j => {
      if (j.status !== JobStatus.Running) {
        idToDelete.push(j.id)
      }
    })
    idToDelete.forEach(id => {
      this._jobList.splice(this._jobList.indexOf(this._jobObj[id]), 1)
    })
    this._jobs.next(this._jobList)
  }

  createJob(type: JobType, id: string, from = '', to = '', localFile = ''): string {
    const newJob = new JobItem(id, type, JobStatus.Running, from, to, localFile)
    this._jobObj[id] = newJob
    this._jobList.push(newJob)
    this._jobs.next(this._jobList)
    return id
  }

  updateJobStatus(id: string, s: JobStatus) {
    if (this._jobObj[id]) {
      this._jobObj[id].status = s
    }
  }

  updateJobMessage(id: string, message: string) {
    if (this._jobObj[id]) {
      this._jobObj[id].message = message
    }
  }

  updatePercentage(id: string, p: number, loaded: number, total: number) {
    if (this._jobObj[id]) {
      this._jobObj[id].percentage = p
      this._jobObj[id].loaded = loaded
      this._jobObj[id].total = total
    }
  }

  openJobFileLocation(id: string) {
    const job = this._jobObj[id]

    if (job && job.localFile) {
      this.electron.send('Application-ShowInFolder', { path: job.localFile })
    }
  }

  stopJob(id: string) {
    const job = this._jobObj[id]
    if (job) {
      this.electron.send('Jobs-Abort', { id: id })
    }
  }
}

class JobItem implements Job {
  percentage: number
  id: string
  type: JobType
  status: JobStatus
  from = ''
  to = ''
  localFile = ''
  loaded = 0
  total = 0

  constructor(i, t, s, f, to, lf) {
    this.id = i
    this.type = t
    this.status = s
    this.percentage = 0
    this.from = f
    this.to = to
    this.localFile = lf
  }
}
