import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { UnlockAccountComponent } from './unlock-account.component'
import { FormsModule } from '@angular/forms'
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

describe('AddAccountComponent', () => {
  let component: UnlockAccountComponent
  let fixture: ComponentFixture<UnlockAccountComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InfrastructureModule, FormsModule, NoopAnimationsModule],
      declarations: [UnlockAccountComponent],
    }).compileComponents()
  }))

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnlockAccountComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('should emit toClose on clicking close btn', () => {
    let emit = false
    component.toClose.subscribe(_ => {
      emit = true
    })
    fixture.nativeElement.querySelector('.close-btn').click()
    expect(emit).toBeTruthy()
  })
})
