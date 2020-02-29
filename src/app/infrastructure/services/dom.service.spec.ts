import { inject, TestBed } from '@angular/core/testing'

import { DomService } from 'src/app/infrastructure/services/dom.service'

describe('DomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomService],
    })
  })

  it('should be created', inject([DomService], (service: DomService) => {
    expect(service).toBeTruthy()
  }))
})
