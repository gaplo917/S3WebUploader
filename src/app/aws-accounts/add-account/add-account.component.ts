import { Component, OnInit, EventEmitter } from '@angular/core'
import { AccountsService } from '../services/accounts.service'
import { trigger, transition, query, stagger, animate, keyframes, style } from '@angular/animations'
import { SubscriptionComponent } from 'src/app/infrastructure/subscription-component'

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
            this.addAccount()
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
    if (this.key) {
      this.loading = true
      this.accounts.testAccount({
        id: this.key,
        secret: this.secret,
        url: this.url,
      })
    }
  }

  onTextChange() {
    this.tested = false
    this.valid = false
  }

  addAccount() {
    const accountDetail = {
      id: this.key,
      secret: this.secret,
      url: this.url,
    }

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
