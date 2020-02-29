import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { Component, OnInit } from '@angular/core'
import { SpinnerComponent } from 'src/app/infrastructure/spinner/spinner.component'
import { BusyScreenComponent } from 'src/app/infrastructure/busy-screen/busy-screen.component'

@Component({
  selector: 'app-host',
  template: `
    <app-busy-screen [spinnerSize]="size"></app-busy-screen>
  `,
})
class HostComponent implements OnInit {
  ngOnInit(): void {}
}

describe('BusyScreenComponent', () => {
  let component: HostComponent
  let fixture: ComponentFixture<HostComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent, SpinnerComponent, BusyScreenComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
