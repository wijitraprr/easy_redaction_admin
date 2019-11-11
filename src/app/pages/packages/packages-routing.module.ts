import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackagesComponent } from './packages.component';
import { PackagesListComponent } from './packages-list/packages-list.component';
import { PackagesEditComponent } from './package-edit/package-edit.component';
import { PackagesAddComponent } from './package-add/package-add.component';



const routes: Routes = [{
  path: '',
  component: PackagesComponent,
  children: [{
    path: 'packages-list',
    component: PackagesListComponent,
  }, {
    path: 'package-add',
    component: PackagesAddComponent,
  },
     {
    path: 'package-edit/:id',
    component: PackagesEditComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PackagesRoutingModule { }


export const routedComponents = [

  PackagesComponent,
  PackagesListComponent,
  PackagesEditComponent,
  PackagesAddComponent

];