import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HistoryListComponent } from 'src/app/histories/history-list/history-list.component'
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module'
import { BehaviorSubject } from 'rxjs'
import { HistoriesService } from 'src/app/histories/services/histories.service'

describe('HistoryListComponent', () => {
  let component: HistoryListComponent
  let fixture: ComponentFixture<HistoryListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InfrastructureModule],
      declarations: [HistoryListComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('should list history entries', () => {
    let svc = TestBed.get(HistoriesService) as HistoriesService
    svc.Histories = new BehaviorSubject([
      {
        type: 'hi',
        name: 'hi',
        time: '',
        status: 'success',
      },
    ])
    fixture = TestBed.createComponent(HistoryListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

    expect(fixture.nativeElement.querySelectorAll('.history-entry').length).toBe(1)
  })
})
