import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module'
import { JobListComponent } from 'src/app/job-view/job-list/job-list.component'
import { JobItemComponent } from 'src/app/job-view/job-item/job-item.component'
import { FileSizePipe } from 'src/app/pipes/file-size.pipe'

@NgModule({
  imports: [CommonModule, InfrastructureModule],
  declarations: [JobListComponent, JobItemComponent, FileSizePipe],
  exports: [JobListComponent],
})
export class JobViewModule {}
