import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module'
import { AwsS3Module } from 'src/app/aws-s3/aws-s3.module'
import { TreeViewModule } from 'src/app/tree-view/tree-view.module'
import { FolderBrowserComponent } from 'src/app/folder-browser/folder-browser/folder-browser.component'
import { FileInfoComponent } from 'src/app/folder-browser/file-info/file-info.component'

@NgModule({
  imports: [CommonModule, InfrastructureModule, AwsS3Module, TreeViewModule],
  declarations: [FolderBrowserComponent, FileInfoComponent],
  exports: [FolderBrowserComponent],
})
export class FolderBrowserModule {}
