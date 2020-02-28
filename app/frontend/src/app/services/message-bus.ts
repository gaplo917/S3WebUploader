import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class MessageBus {
  private map = new Map<string, any[]>()

  constructor() {}

  public send(key, data): void {
    let cbs = this.map.get(key)
    if (cbs !== undefined) {
      console.debug(`Publishing channel ${key} ${JSON.stringify(data)}`)
      cbs.forEach(it => it(key, data))
    }

  }

  public on(key: string, cb: any): void {

    console.debug(`Subscribing channel ${key}`)

    let cbs = this.map.get(key)
    if (cbs === undefined) {
      this.map.set(key, [cb])
    } else if (Array.isArray(cbs)) {
      this.map.set(key, [...cbs, cb])
    }
  }
}
