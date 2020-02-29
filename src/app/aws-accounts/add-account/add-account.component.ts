import { Component, EventEmitter, OnInit } from '@angular/core'
import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations'
import { SubscriptionComponent } from 'src/app/infrastructure/subscription-component'
import { AccountsService } from 'src/app/aws-accounts/services/accounts.service'
import { IAccount } from 'src/app/services/model'

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['../../infrastructure/prompt.scss', './add-account.component.scss'],
  animations: [
    trigger('ngIfAnimation', [
      transition('void => *', [
        query(
          ':self',
          stagger('300ms', [animate('0.3s ease-in', keyframes([style({ opacity: 0 }), style({ opacity: 1 })]))]),
          { optional: true },
        ),
      ]),
    ]),
  ],
})
export class AddAccountComponent extends SubscriptionComponent implements OnInit {
  toClose = new EventEmitter()
  loading = false
  key = ''
  secret = ''
  url = ''
  valid = false
  tested = false
  isSaveSecurely = false
  masterPassword = ''
  addAccountErrMsg: string

  constructor(private accounts: AccountsService) {
    super()
  }

  ngOnInit() {
    this.recordSubscription(
      this.accounts.AccountTestResult.subscribe(_ => {
        if (_.account.id === this.key && _.account.secret === this.secret) {
          if (_.success) {
            this.addAccount(_.account)
          } else {
            this.tested = true
            this.valid = false
            this.loading = false
          }
        }
      }),
    )
  }

  close() {
    this.toClose.emit()
  }

  testAccount() {
    if (!this.key) return
    this.loading = true
    let initialBucket
    let pathStyle = true

    // handle virtual-hosted style
    // https://aws.amazon.com/blogs/aws/amazon-s3-path-deprecation-plan-the-rest-of-the-story/
    if (
      this.url.match(/https:\/\/[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+\.digitaloceanspaces.com/) ||
      this.url.match(/https:\/\/[A-Za-z0-9\-_]+\.s3[A-Za-z0-9\-_]+\.amazonaws.com/)
    ) {
      initialBucket = this.url.match(/[A-Za-z0-9\-_]+\./)[0].replace('.', '')
    }

    if (this.url.includes('digitaloceanspaces.com') || this.url.includes('amazonaws.com')) {
      // guarantee support virtual hosted style
      pathStyle = false
    }

    this.accounts.testAccount({
      id: this.key,
      secret: this.secret,
      url: this.url,
      initialBucket: initialBucket,
      pathStyle,
    })
  }

  onTextChange() {
    this.tested = false
    this.valid = false
  }

  addAccount(accountDetail: IAccount) {
    this.accounts.addAccount(accountDetail, this.isSaveSecurely, this.masterPassword, err => {
      if (err === null) {
        this.tested = true
        this.valid = true
        this.loading = false
        this.toClose.emit()
      } else {
        this.addAccountErrMsg = err.message
        this.tested = true
        this.valid = false
        this.loading = false
      }
    })
  }

  fillInMinIODemo() {
    this.key = 'Q3AM3UQ867SPQQA43P2F'
    this.secret = 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG'
    this.url = 'https://play.minio.io/'
  }
}
