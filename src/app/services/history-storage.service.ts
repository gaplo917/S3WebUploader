import { MessageBus } from './message-bus'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ElectronHistoryStorage {
  private historyEntries: Array<{ type: string; name: string; time: Date; status: string }> = []
  constructor(private messageBus: MessageBus) {
    this.messageBus.on('History-Add', (event: string, arg: any) => {
      this.addEntry(arg.type, arg.name, arg.status)
    })
    this.messageBus.on('History-Clear', (event: string, arg: any) => {
      this.clearHistory()
    })
  }

  public initialize() {
    this.load()
    this.messageBus.send('History-Changed', { histories: this.getHistory() })
  }

  public clearHistory() {
    this.historyEntries = []
    this.save()
    this.messageBus.send('History-Changed', { histories: this.getHistory() })
  }

  public getHistory() {
    return this.historyEntries
  }

  public addEntry(type: string, name: string, status: string) {
    this.historyEntries.unshift({
      type,
      name,
      status,
      time: new Date(),
    })
    if (this.historyEntries.length > 10) {
      this.historyEntries.splice(10, this.historyEntries.length - 10)
    }
    this.save()
    this.messageBus.send('History-Changed', { histories: this.getHistory() })
  }

  private load() {
    this.historyEntries = JSON.parse(localStorage.getItem('history') || '[]')
  }

  private save() {
    localStorage.setItem('history', JSON.stringify(this.historyEntries))
  }
}
