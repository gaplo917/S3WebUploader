import { IAccount } from './model'
import { MessageBus } from './message-bus'
import { Injectable } from '@angular/core'
import { CryptoService } from './crypto.service'
import { DomService } from '../infrastructure/services/dom.service'
import { UnlockAccountComponent } from '../aws-accounts/unlock-account/unlock-account.component'

@Injectable({
  providedIn: 'root',
})
export class ElectronAccountsService {
  private accounts: IAccount[] = []
  constructor(private dom: DomService, private messageBus: MessageBus, private cryptoService: CryptoService) {
    this.messageBus.on(
      'Accounts-AddAccount',
      (
        event: string,
        arg: { account: IAccount; isSaveSecurely: boolean; masterPassword: string; cb: (err: Error) => void },
      ) => {
        this.AddAccount(arg)
      },
    )
  }

  public initialize() {
    this.LoadAccounts()
  }

  public AddAccount(req: {
    account: IAccount
    isSaveSecurely: boolean
    masterPassword: string
    cb: (err: Error) => void
  }) {
    const { account: acc, isSaveSecurely, masterPassword, cb } = req
    if (!this.accounts.find(it => it.id === acc.id && it.url === acc.url) && acc.id) {
      this.accounts.push(acc)
      if (isSaveSecurely) {
        const result = this.SaveAccounts(masterPassword)
        if (!result) {
          // rollback
          this.accounts = this.accounts.filter(it => it.id !== acc.id && it.url !== acc.url)
          cb(new Error('Password not match'))
        } else {
          cb(null)
          this.messageBus.send('Accounts-AccountAdded', acc)
        }
      } else {
        cb(null)
        this.messageBus.send('Accounts-AccountAdded', acc)
      }
    }
  }

  public LoadAccounts() {
    const credential = JSON.parse(localStorage.getItem('credential') || null)

    if (credential) {
      const elem = this.dom.appendComponentToBody(UnlockAccountComponent)
      elem.instance.onUnlock = masterPassword => {
        const { salt, encrypted, hmpw, iv } = credential
        if (this.cryptoService.pbkdf2(masterPassword, salt).toString() !== hmpw) {
          return false
        }
        const hashSecret = this.cryptoService.hash(masterPassword, salt).toString()
        this.accounts = this.cryptoService.decrypt(encrypted, hashSecret, iv)
        this.messageBus.send('Accounts-AccountsLoaded', this.accounts)
        return true
      }
      elem.instance.toClose.subscribe(_ => {
        elem.destroy()
      })
    }
  }

  public SaveAccounts(masterPassword: string) {
    const accounts = this.accounts
    const credential = JSON.parse(localStorage.getItem('credential') || null)

    if (credential) {
      const { salt, hmpw, iv } = credential
      if (this.cryptoService.pbkdf2(masterPassword, salt).toString() !== hmpw) {
        return false
      }
      const hashSecret = this.cryptoService.hash(masterPassword, salt).toString()

      const encrypted = this.cryptoService.encrypt(accounts, hashSecret, salt)

      localStorage.setItem(
        'credential',
        JSON.stringify({
          salt,
          hmpw,
          iv,
          encrypted,
        }),
      )
      return true
    } else {
      const salt = this.cryptoService.createRandomString(16)
      const iv = this.cryptoService.createRandomString(32)

      const hashSecret = this.cryptoService.hash(masterPassword, salt).toString()

      // for validate master password
      const hmpw = this.cryptoService.pbkdf2(masterPassword, salt).toString()

      const encrypted = this.cryptoService.encrypt(accounts, hashSecret, iv)

      localStorage.setItem(
        'credential',
        JSON.stringify({
          salt,
          hmpw,
          iv,
          encrypted,
        }),
      )
      return true
    }
  }
}
