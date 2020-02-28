import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { JobListComponent } from './job-list/job-list.component'
import { InfrastructureModule } from '../infrastructure/infrastructure.module'
import { JobItemComponent } from './job-item/job-item.component'
import { FileSizePipe } from '../pipes/file-size.pipe'

@NgModule({
  imports: [CommonModule, InfrastructureModule],
  declarations: [JobListComponent, JobItemComponent, FileSizePipe],
  exports: [JobListComponent],
})
export class JobViewModule {}
