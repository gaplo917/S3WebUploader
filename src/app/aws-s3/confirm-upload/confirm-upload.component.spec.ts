import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing'

import { FormsModule } from '@angular/forms'
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module'
import { ConfirmUploadComponent } from 'src/app/aws-s3/confirm-upload/confirm-upload.component'
import { UploadItem } from 'src/app/aws-s3/upload-item'

describe('ConfirmUploadComponent', () => {
  let component: ConfirmUploadComponent
  let fixture: ComponentFixture<ConfirmUploadComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InfrastructureModule, FormsModule],
      declarations: [ConfirmUploadComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmUploadComponent)
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('should display all upload items', () => {
    component.Items = [new UploadItem({ name: 'hi' }, 'hi'), new UploadItem({ name: 'hi123' }, 'hi')]
    fixture.detectChanges()
    expect(fixture.nativeElement.querySelectorAll('form input[type="text"]').length).toBe(2)
  })
  it('should check all item validity on text change', fakeAsync(() => {
    component.Items = [new UploadItem({ name: 'hi' }, 'hi'), new UploadItem({ name: 'hi123' }, 'hi')]
    fixture.detectChanges()
    tick()
    let element = fixture.nativeElement.querySelector('form input[type="text"]')
    element.value = ''
    element.dispatchEvent(new Event('input'))
    tick()
    fixture.detectChanges()

    expect(component.isValid).toBeFalsy()
  }))
})
