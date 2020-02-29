import { inject, TestBed } from '@angular/core/testing'

import { NotificationsService, SimpleNotificationsModule } from 'angular2-notifications'
import { ElectronService } from 'src/app/infrastructure/services/electron.service'
import { MockElectron } from 'src/app/infrastructure/mock-electron.service'
import { S3NotificationService } from 'src/app/aws-s3/services/s3-notification.service'

describe('S3NotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SimpleNotificationsModule.forRoot()],
      providers: [S3NotificationService, { provide: ElectronService, useClass: MockElectron }],
    })
  })

  it('should be created', inject([S3NotificationService], (service: S3NotificationService) => {
    expect(service).toBeTruthy()
  }))
  it('should delegate to NotificationsService on S3-OperationFailed', inject(
    [S3NotificationService],
    (service: S3NotificationService) => {
      service.init()
      let noti = TestBed.get(NotificationsService) as NotificationsService
      let electron = TestBed.get(ElectronService) as MockElectron
      let spy = spyOn(noti, 'error')

      electron.send('S3-OperationFailed', { error: {} })

      expect(spy).toHaveBeenCalled()
    },
  ))
  it('should delegate to NotificationsService on S3-LocationNotFound', inject(
    [S3NotificationService],
    (service: S3NotificationService) => {
      service.init()
      let noti = TestBed.get(NotificationsService) as NotificationsService
      let electron = TestBed.get(ElectronService) as MockElectron
      let spy = spyOn(noti, 'error')

      electron.send('S3-LocationNotFound', { error: {} })

      expect(spy).toHaveBeenCalled()
    },
  ))
})
