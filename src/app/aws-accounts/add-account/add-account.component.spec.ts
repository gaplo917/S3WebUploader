import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing'
import { AddAccountComponent } from './add-account.component'
import { FormsModule } from '@angular/forms'
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { AccountsService } from '../services/accounts.service'

describe('AddAccountComponent', () => {
  let component: AddAccountComponent
  let fixture: ComponentFixture<AddAccountComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InfrastructureModule, FormsModule, NoopAnimationsModule],
      declarations: [AddAccountComponent],
    }).compileComponents()
  }))

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddAccountComponent)
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
  it('should disable test button when no name entered', () => {
    expect(fixture.nativeElement.querySelector('#test-btn').classList).toContain('disabled')
  })
  it('should not show credential not found on startup', () => {
    expect(fixture.nativeElement.querySelector('#cred-not-found')).toBeNull()
  })
  it('should enable test button when name entered', fakeAsync(() => {
    let key = fixture.nativeElement.querySelector("input[name='account-key']")
    key.value = 'hi'
    key.dispatchEvent(new Event('input'))
    let secret = fixture.nativeElement.querySelector("input[name='account-secret']")
    secret.value = 'secret'
    secret.dispatchEvent(new Event('input'))
    let url = fixture.nativeElement.querySelector("input[name='url-name']")
    url.value = 'url'
    url.dispatchEvent(new Event('input'))
    fixture.detectChanges()
    expect(fixture.nativeElement.querySelector('#test-btn').classList).not.toContain('disabled')
  }))
  it('should only display spinner when loading', () => {
    component.loading = true

    fixture.detectChanges()
    fixture.whenRenderingDone().then(() => {
      expect(fixture.nativeElement.querySelector('app-spinner')).not.toBeNull()
      expect(fixture.nativeElement.querySelectorAll('.btn').length).toBe(0)
    })
  })
  it('should delegate testAccount and enable loading on testing account', fakeAsync(() => {
    let accs = TestBed.get(AccountsService) as AccountsService
    let spy = spyOn(accs, 'testAccount').and.callThrough()

    let element = fixture.nativeElement.querySelector("input[name='account-key']")
    element.value = 'hi'
    element.dispatchEvent(new Event('input'))
    fixture.detectChanges()
    fixture.nativeElement.querySelector('#test-btn').click()

    expect(spy).toHaveBeenCalled()
    expect(component.loading).toBeTruthy()
  }))

  it('should be back to non-valid state on text change', fakeAsync(() => {
    let accs = TestBed.get(AccountsService) as AccountsService
    accs.AccountTestResult.emit({
      account: { id: '', secret: '', url: '' },
      success: true,
    })
    fixture.detectChanges()
    let element = fixture.nativeElement.querySelector("input[name='account-key']")
    element.value = 'hi123'
    element.dispatchEvent(new Event('input'))
    fixture.detectChanges()
    tick()
    expect(fixture.nativeElement.querySelector('#cred-found')).toBe(null)
    expect(fixture.nativeElement.querySelector('#add-account-container')).toBe(null)
    expect(fixture.nativeElement.querySelector('#test-btn')).not.toBeNull()
  }))
})
