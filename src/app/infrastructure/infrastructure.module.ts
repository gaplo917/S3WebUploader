import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElectronService } from './services/electron.service'
import { SpinnerComponent } from './spinner/spinner.component'
import { DomService } from './services/dom.service'
import { CheckboxComponent } from './checkbox/checkbox.component'
import { BusyScreenComponent } from './busy-screen/busy-screen.component'
import { TooltipComponent } from './tooltip/tooltip.component'
import { TooltipDirective } from './tooltip-directive/tooltip.directive'

@NgModule({
  imports: [CommonModule],
  providers: [ElectronService, DomService],
  declarations: [SpinnerComponent, CheckboxComponent, BusyScreenComponent, TooltipComponent, TooltipDirective],
  exports: [SpinnerComponent, CheckboxComponent, BusyScreenComponent, TooltipComponent, TooltipDirective],
  entryComponents: [TooltipComponent],
})
export class InfrastructureModule {}
