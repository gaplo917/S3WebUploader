import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { WelcomePageComponent } from './welcome-page.component'
import { SideHeaderComponent } from '../side-header/side-header.component'
import { AwsAccountsModule } from '../aws-accounts/aws-accounts.module'
import { RouterTestingModule } from '@angular/router/testing'
import { HistoriesModule } from '../histories/histories.module'
import { InfrastructureModule } from '../infrastructure/infrastructure.module'
import { SimpleNotificationsModule } from 'angular2-notifications'
import { EventEmitter } from '@angular/core'

describe('WelcomePageComponent', () => {
  let component: WelcomePageComponent
  let fixture: ComponentFixture<WelcomePageComponent>
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AwsAccountsModule,
        RouterTestingModule,
        HistoriesModule,
        InfrastructureModule,
        SimpleNotificationsModule.forRoot(),
      ],
      declarations: [SideHeaderComponent, WelcomePageComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
