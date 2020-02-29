import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations'
import { JobType } from 'src/app/job-view/job-type'
import { JobStatus } from 'src/app/job-view/job-status'

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss'],
  animations: [
    trigger('ngIfAnimation', [
      transition('* => void', [
        query(
          '*',
          stagger('300ms', [animate('0.3s ease-in', keyframes([style({ opacity: 1 }), style({ opacity: 0 })]))]),
          { optional: true },
        ),
      ]),
    ]),
  ],
})
export class JobItemComponent implements OnInit {
  @Input() percentage = 50
  @Input() loaded = 0 // in byte
  @Input() total = 0 // in byte

  @Input() set jobType(v: JobType) {
    this.setJobType(v)
  }

  @Input() source = ''
  @Input() destination = ''
  @Input() set jobStatus(v: JobStatus) {
    this.setJobStatus(v)
  }

  @Input() message = ''
  @Output() toDelete: EventEmitter<{}> = new EventEmitter()
  @Output() toOpen: EventEmitter<{}> = new EventEmitter()
  @Output() toStop: EventEmitter<{}> = new EventEmitter()
  _jobtype = ''
  _jobstatus = ''
  constructor() {
    this.jobType = JobType.Upload
    this.jobStatus = JobStatus.Running
  }

  ngOnInit() {}

  setJobType(j: JobType) {
    if (j === JobType.Download) {
      this._jobtype = 'download'
    } else {
      this._jobtype = 'upload'
    }
  }

  setJobStatus(j: JobStatus) {
    if (j === JobStatus.Completed) {
      this._jobstatus = 'c'
    } else if (j === JobStatus.Failed) {
      this._jobstatus = 'f'
    } else {
      this._jobstatus = 'r'
    }
  }

  onDeleteJob(event) {
    this.toDelete.emit()
    event.stopPropagation()
  }

  onStopJob(event) {
    this.toStop.emit()
    event.stopPropagation()
  }
}
