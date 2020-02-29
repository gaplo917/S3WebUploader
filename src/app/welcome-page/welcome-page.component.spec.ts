import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { WelcomePageComponent } from 'src/app/welcome-page/welcome-page.component'
import { SideHeaderComponent } from 'src/app/side-header/side-header.component'
import { AwsAccountsModule } from 'src/app/aws-accounts/aws-accounts.module'
import { RouterTestingModule } from '@angular/router/testing'
import { HistoriesModule } from 'src/app/histories/histories.module'
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module'
import { SimpleNotificationsModule } from 'angular2-notifications'

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
