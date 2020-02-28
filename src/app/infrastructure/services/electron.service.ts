import { Injectable, NgZone } from '@angular/core'
import { MessageBus } from '../../services/message-bus'
declare let electron: any

@Injectable()
export class ElectronService {
  private initialized = false
  private ipcRenderer = null
  constructor(private zone: NgZone, private messageBus: MessageBus) {
    if (electron) {
      this.ipcRenderer = electron.ipcRenderer
      this.initialized = true
    } else {
      this.ipcRenderer = messageBus
      this.initialized = true
      console.warn('Electron not available')
    }
  }

  // safe subscribe method for angular change detection
  onCD(event: string, handler: Function) {
    if (this.available) {
      this.ipcRenderer.on(event, (ev, arg) => {
        this.zone.run(() => {
          handler(ev, arg)
        })
      })
    }
  }

  send(event: string, arg: any) {
    this.ipcRenderer.send(event, arg)
  }

  get available(): boolean {
    return this.initialized
  }
}
