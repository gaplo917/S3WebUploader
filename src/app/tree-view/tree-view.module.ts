import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module'
import { TreeViewComponent } from 'src/app/tree-view/tree-view/tree-view.component'
import { TreeItemComponent } from 'src/app/tree-view/tree-item/tree-item.component'

@NgModule({
  imports: [CommonModule, InfrastructureModule, RouterModule],
  declarations: [TreeViewComponent, TreeItemComponent],
  exports: [TreeViewComponent],
})
export class TreeViewModule {}
