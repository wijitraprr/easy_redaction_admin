import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportComponent } from './support.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TicketsComponent } from './tickets/tickets.component';




const routes: Routes = [{
  path: '',
  component: SupportComponent,
  children: [{
    path: 'feedback',
    component: FeedbackComponent,
  }, {
    path: 'tickets',
    component: TicketsComponent,
  },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SupportRoutingModule {

}

export const routedComponents = [

  SupportComponent,
  FeedbackComponent,
  TicketsComponent
];
