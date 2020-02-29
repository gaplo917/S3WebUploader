import { inject, TestBed } from '@angular/core/testing'

import { RequestUploadService } from 'src/app/aws-s3/services/request-upload.service'
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module'

describe('RequestUploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InfrastructureModule],
      providers: [RequestUploadService],
    })
  })

  it('should be created', inject([RequestUploadService], (service: RequestUploadService) => {
    expect(service).toBeTruthy()
  }))
})
