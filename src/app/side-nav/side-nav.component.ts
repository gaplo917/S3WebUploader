import { Component, OnInit } from '@angular/core'
import { DomService } from 'src/app/infrastructure/services/dom.service'
import { SelectionService } from 'src/app/tree-view/services/selection.service'
import { JobService } from 'src/app/job-view/job.service'
import { AddAccountComponent } from 'src/app/aws-accounts/add-account/add-account.component'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  constructor(private dom: DomService, private sel: SelectionService, private jobs: JobService) {}

  ngOnInit() {}

  openAddAccount() {
    const elem = this.dom.appendComponentToBody(AddAccountComponent)
    elem.instance.toClose.subscribe(_ => {
      elem.destroy()
    })
  }

  onCollapseAll() {
    this.sel.CollapseAll.emit()
  }

  clearNotRunningJobs() {
    this.jobs.clearNotRunningJobs()
  }
}
