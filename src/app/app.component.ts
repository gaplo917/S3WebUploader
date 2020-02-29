import { AfterViewInit, Component, OnInit } from '@angular/core'
import { fadeAnimation } from 'src/app/router.animation'
import { ElectronService } from 'src/app/infrastructure/services/electron.service'
import { AccountsService } from 'src/app/aws-accounts/services/accounts.service'
import { S3Service } from 'src/app/aws-s3/services/s3.service'
import { S3NotificationService } from 'src/app/aws-s3/services/s3-notification.service'
import { JobService } from 'src/app/job-view/job.service'
import { HistoriesService } from 'src/app/histories/services/histories.service'
import { RequestUploadService } from 'src/app/aws-s3/services/request-upload.service'
import { ElectronAccountsService } from 'src/app/services/accounts'
import { ElectronAWSService } from 'src/app/services/aws'
import { ElectronHistoryStorage } from 'src/app/services/history-storage.service'
import { ElectronJobManager } from 'src/app/services/job-manager'
import { ElectronS3Service } from 'src/app/services/s3'

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
