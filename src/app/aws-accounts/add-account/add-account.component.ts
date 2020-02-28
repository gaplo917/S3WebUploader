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
  constructor(private accounts: AccountsService) {
    super()
  }

  ngOnInit() {
    this.recordSubscription(
      this.accounts.AccountTestResult.subscribe(_ => {
        if (_.account.id === this.key && _.account.secret === this.secret) {
          this.tested = true
          this.valid = _.success
          this.loading = false

          if (this.valid) {
            this.addAccount()
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
    this.accounts.addAccount({
      id: this.key,
      secret: this.secret,
      url: this.url,
    })
    this.toClose.emit()
  }

  fillInMinIODemo() {
    this.key = 'Q3AM3UQ867SPQQA43P2F'
    this.secret = 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG'
    this.url = 'https://play.minio.io/'
  }
}
