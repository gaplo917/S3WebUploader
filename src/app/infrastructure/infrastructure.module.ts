import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElectronService } from 'src/app/infrastructure/services/electron.service'
import { SpinnerComponent } from 'src/app/infrastructure/spinner/spinner.component'
import { DomService } from 'src/app/infrastructure/services/dom.service'
import { CheckboxComponent } from 'src/app/infrastructure/checkbox/checkbox.component'
import { BusyScreenComponent } from 'src/app/infrastructure/busy-screen/busy-screen.component'
import { TooltipComponent } from 'src/app/infrastructure/tooltip/tooltip.component'
import { TooltipDirective } from 'src/app/infrastructure/tooltip-directive/tooltip.directive'

@NgModule({
  imports: [CommonModule],
  providers: [ElectronService, DomService],
  declarations: [SpinnerComponent, CheckboxComponent, BusyScreenComponent, TooltipComponent, TooltipDirective],
  exports: [SpinnerComponent, CheckboxComponent, BusyScreenComponent, TooltipComponent, TooltipDirective],
  entryComponents: [TooltipComponent],
})
export class InfrastructureModule {}
