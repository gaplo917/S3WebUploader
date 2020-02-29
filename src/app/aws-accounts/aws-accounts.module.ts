import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module'
import { AddAccountComponent } from 'src/app/aws-accounts/add-account/add-account.component'
import { UnlockAccountComponent } from 'src/app/aws-accounts/unlock-account/unlock-account.component'

@NgModule({
  imports: [CommonModule, FormsModule, BrowserAnimationsModule, InfrastructureModule],
  declarations: [AddAccountComponent, UnlockAccountComponent],
  exports: [AddAccountComponent, UnlockAccountComponent],
  entryComponents: [AddAccountComponent, UnlockAccountComponent],
})
export class AwsAccountsModule {}
