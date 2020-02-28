import { Injectable } from '@angular/core'
import { NGXLogger } from 'ngx-logger'

@Injectable({
  providedIn: 'root',
})
export class MessageBus {
  private map = new Map<string, any[]>()

  constructor(private logger: NGXLogger) {}

  public send(key, data): void {
    const cbs = this.map.get(key)
    if (cbs !== undefined) {
      this.logger.debug(`Publishing channel ${key} ${JSON.stringify(data)}`)
      cbs.forEach(it => it(key, data))
    }
  }

  public on(key: string, cb: any): void {
    this.logger.debug(`Subscribing channel ${key}`)

    const cbs = this.map.get(key)
    if (cbs === undefined) {
      this.map.set(key, [cb])
    } else if (Array.isArray(cbs)) {
      this.map.set(key, [...cbs, cb])
    }
  }
}
