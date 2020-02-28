import { TestBed, inject } from '@angular/core/testing'
import { AccountsService } from './accounts.service'
import { ElectronService } from 'src/app/infrastructure/services/electron.service'
import { MockElectron } from 'src/app/infrastructure/mock-electron.service'

describe('AccountsService', () => {
  let electron: MockElectron
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountsService, { provide: ElectronService, useClass: MockElectron }],
    })
    electron = TestBed.get(ElectronService) as MockElectron
  })

  it('should be created', inject([AccountsService], (service: AccountsService) => {
    expect(service).toBeTruthy()
  }))
  it('should emit new account list on AWS-AccountInitialized', inject([AccountsService], (service: AccountsService) => {
    service.init()
    let accs = []
    service.Accounts.subscribe(a => {
      accs = a
    })
    electron.send('AWS-AccountInitialized', { account: 'hi' })
    expect(accs.length).toBe(1)
  }))

  it('should emit account info on AWS-CredentialFound', inject([AccountsService], (service: AccountsService) => {
    let info
    service.AccountTestResult.subscribe(_ => {
      info = _
    })
    service.init()
    electron.send('AWS-CredentialFound', { account: { id: 'hi', secret: '', url: '' }, success: true })

    expect(info.success).toBeTruthy()
    expect(info.account).toEqual({ account: { id: 'hi', secret: '', url: '' }, success: true })
  }))

  it('should send AWS-TestAccount on testAccount', inject([AccountsService], (service: AccountsService) => {
    service.testAccount({ id: 'hi', secret: '', url: '' })

    expect(electron.messageWasSent('AWS-TestAccount', { id: 'hi', secret: '', url: '' })).toBeTruthy()
  }))
})
