import { Injectable, EventEmitter } from '@angular/core'
import { ElectronService } from 'src/app/infrastructure/services/electron.service'
import { Observable, BehaviorSubject } from 'rxjs'
import { IAccount } from '../../services/model'

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  AccountTestResult: EventEmitter<{ account: IAccount; success: boolean }> = new EventEmitter<{
    account: IAccount
    success: boolean
  }>()

  InitializingAccount: EventEmitter<{}> = new EventEmitter()
  Accounts: Observable<IAccount[]>
  private _accounts = new BehaviorSubject<IAccount[]>([])
  private _validAccounts: IAccount[] = []
  constructor(private electron: ElectronService) {
    this.Accounts = this._accounts.asObservable()
  }

  init() {
    this.electron.onCD('Settings-SettingsChanged', (event: string, arg: any) => {
      // 0.2.0: Settings accounts in settings are deprecated, convert legacy accounts to accounts service
      arg.accounts.forEach(a => {
        this.addAccount(a)
      })
    })
    this.electron.onCD('Accounts-AccountAdded', (event: string, arg: IAccount) => {
      this.electron.send('AWS-InitAccount', arg)
    })
    this.electron.onCD('Accounts-AccountsLoaded', (event: string, arg: IAccount[]) => {
      arg.forEach(acc => {
        this.electron.send('AWS-InitAccount', acc)
      })
    })
    this.electron.onCD('AWS-AccountInitialized', (event: string, arg: IAccount) => {
      this._validAccounts.push(arg)
      this._accounts.next(this._validAccounts)
    })
    this.electron.onCD('AWS-CredentialFound', (event: string, arg: IAccount) => {
      this.AccountTestResult.emit({
        account: arg,
        success: true,
      })
    })
    this.electron.onCD('AWS-CredentialNotFound', (event: string, arg: IAccount) => {
      this.AccountTestResult.emit({
        account: arg,
        success: false,
      })
    })
  }

  testAccount(account: IAccount) {
    this.electron.send('AWS-TestAccount', account)
  }

  addAccount(account: IAccount) {
    this.electron.send('Accounts-AddAccount', account)
  }
}
