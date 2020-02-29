import { AfterViewInit, Component, OnInit } from '@angular/core'
import { fadeAnimation } from './router.animation'
import { ElectronService } from './infrastructure/services/electron.service'
import { AccountsService } from './aws-accounts/services/accounts.service'
import { S3Service } from './aws-s3/services/s3.service'
import { S3NotificationService } from './aws-s3/services/s3-notification.service'
import { JobService } from './job-view/job.service'
import { HistoriesService } from './histories/services/histories.service'
import { RequestUploadService } from './aws-s3/services/request-upload.service'
import { ElectronAccountsService } from './services/accounts'
import { ElectronAWSService } from './services/aws'
import { ElectronHistoryStorage } from './services/history-storage.service'
import { ElectronJobManager } from './services/job-manager'
import { ElectronS3Service } from './services/s3'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(
    private accounts: AccountsService,
    private electron: ElectronService,
    private s3: S3Service,
    private s3Noti: S3NotificationService,
    private jobs: JobService,
    private histories: HistoriesService,
    private reqUpload: RequestUploadService,
    private eAccount: ElectronAccountsService,
    private eAws: ElectronAWSService,
    private eHistoryStorage: ElectronHistoryStorage,
    private eJobManager: ElectronJobManager,
    private eS3: ElectronS3Service,
  ) {
    accounts.init()
    s3.init()
    s3Noti.init()
    jobs.init()
    histories.init()
    reqUpload.init()
    this.electron.send('Application-Initialize', {})
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // wait for completely rendered
    requestAnimationFrame(() => {
      this.eHistoryStorage.initialize()
      this.eAccount.initialize()
    })
  }

  disable(event) {
    event.preventDefault()
    return false
  }
}