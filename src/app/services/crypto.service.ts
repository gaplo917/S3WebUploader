import * as CryptoJS from 'crypto-js'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  constructor() {}

  encrypt(data, secret, iv) {
    // Encrypt
    return CryptoJS.AES.encrypt(JSON.stringify(data), secret, { iv }).toString()
  }

  decrypt(ciphertext, secret, iv) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secret, { iv })
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
  }

  hash(secret, salt) {
    return CryptoJS.HmacSHA512(secret, salt)
  }

  pbkdf2(secret, salt) {
    return CryptoJS.PBKDF2(secret, salt, {
      keySize: 512 / 32,
      iterations: 10000,
    })
  }

  createRandomString(byte = 16) {
    return CryptoJS.lib.WordArray.random(byte).toString()
  }
}
