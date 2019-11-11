import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilesComponent } from './files.component';
import { FileListComponent } from './file-list/file-list.component';
import { FilePreviewComponent } from './file-preview/file-preview.component';


const routes: Routes = [{
  path: '',
  component: FilesComponent,
  children: [{
    path: 'file-list',
    component: FileListComponent,
  },{
    path: 'file-preview',
    component: FilePreviewComponent,
  }],
  }];


  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  

export class FilesRoutingModule { }


export const routedComponents = [

  FilesComponent,
  FileListComponent,
  FilePreviewComponent
  
];