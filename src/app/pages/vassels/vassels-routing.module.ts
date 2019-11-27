import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VasselsComponent } from './vassels.component';




const routes: Routes = [{
  path: '',
  component: VasselsComponent,
  }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class VasselsRoutingModule { }


export const routedComponents = [

  VasselsComponent,
  
];