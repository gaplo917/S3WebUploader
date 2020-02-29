import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SimpleNotificationsModule } from 'angular2-notifications'
import { FormsModule } from '@angular/forms'
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module'
import { ConfirmUploadComponent } from 'src/app/aws-s3/confirm-upload/confirm-upload.component'

@NgModule({
  imports: [CommonModule, InfrastructureModule, SimpleNotificationsModule, FormsModule],
  declarations: [ConfirmUploadComponent],
  entryComponents: [ConfirmUploadComponent],
})
export class AwsS3Module {}
