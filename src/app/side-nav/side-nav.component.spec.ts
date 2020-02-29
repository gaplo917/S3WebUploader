import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { NO_ERRORS_SCHEMA } from '@angular/core'
import { SideNavComponent } from 'src/app/side-nav/side-nav.component'
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module'
import { AwsAccountsModule } from 'src/app/aws-accounts/aws-accounts.module'
import { JobViewModule } from 'src/app/job-view/job-view.module'
import { DomService } from 'src/app/infrastructure/services/dom.service'

describe('SideNavComponent', () => {
  let component: SideNavComponent
  let fixture: ComponentFixture<SideNavComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InfrastructureModule, AwsAccountsModule, JobViewModule],
      declarations: [SideNavComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('should delegate to DOMService to create component on openAddAccount', () => {
    let dom = TestBed.get(DomService) as DomService
    let spy = spyOn(dom, 'appendComponentToBody').and.callThrough()

    component.openAddAccount()

    expect(spy).toHaveBeenCalled()
  })
})
