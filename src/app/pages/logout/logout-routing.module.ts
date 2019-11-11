import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogOutComponent } from './logout.component';




export const routes: Routes = [{
  path: 'upload-files',
  component: LogOutComponent,
 
}];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })

export class LogOutRoutingModule { }

// export const routedComponents = [
//   MyFilesComponent,
  
// ];
