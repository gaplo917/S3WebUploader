import { JobStatus } from 'src/app/job-view/job-st\atus'
import { JobType } from 'src/app/job-view/job-type'

export interface Job {
  id: string
  type: JobType
  status: JobStatus
  percentage: number
  from: string
  to: string
  localFile?: string
  message?: string
  loaded: number
  total: number
}
