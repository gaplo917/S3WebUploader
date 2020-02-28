import { IAccount } from './model'
import { MessageBus } from './message-bus'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ElectronAccountsService {
  private accounts: IAccount[] = []
  constructor(private messageBus: MessageBus) {
    // TODO: Restore
    // this.accountsFile = path.join(appDir, 'accounts.json');
    this.messageBus.on('Accounts-AddAccount', (event: string, arg: any) => {
      this.AddAccount(arg)
    })
  }

  public initialize() {
    this.LoadAccounts()
  }

  public AddAccount(acc: IAccount) {
    if (!this.accounts.find(_ => _.id === acc.id) && acc.id) {
      this.accounts.push(acc)
      this.SaveAccoutns()
      this.messageBus.send('Accounts-AccountAdded', acc)
    }
  }

  public LoadAccounts() {
    // TODO: load
    // if (fs.existsSync(this.accountsFile)) {
    //     this.accounts = JSON.parse(fs.readFileSync(this.accountsFile).toString());
    //     this.messageBus.send('Accounts-AccountsLoaded', this.accounts);
    // }
  }

  public SaveAccoutns() {
    // TODO:save
    // if (!fs.existsSync(this.appDir)) {
    //     fs.mkdirSync(this.appDir);
    // }
    // fs.writeFileSync(this.accountsFile, JSON.stringify(this.accounts), 'utf8');
  }
}
