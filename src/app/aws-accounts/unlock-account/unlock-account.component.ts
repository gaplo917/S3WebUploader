import { Component, EventEmitter } from '@angular/core'
import { trigger, transition, query, stagger, animate, keyframes, style } from '@angular/animations'
import { SubscriptionComponent } from 'src/app/infrastructure/subscription-component'

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['../../infrastructure/prompt.scss', './unlock-account.component.scss'],
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
export class UnlockAccountComponent extends SubscriptionComponent {
  toClose = new EventEmitter()
  loading = false
  valid = false
  tested = false
  masterPassword: string = ''
  onUnlock: (pw: string) => boolean

  close() {
    this.toClose.emit()
  }

  unlockAccount() {
    this.valid = this.onUnlock(this.masterPassword)
    if (this.valid) {
      this.toClose.emit()
    }
    this.tested = true
  }

  onTextChange() {
    this.tested = false
    this.valid = false
  }

  clearStorage() {
    localStorage.clear()
    this.toClose.emit()
  }
}
