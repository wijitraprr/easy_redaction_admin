import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityComponent } from './security.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { SessionsComponent } from './sessions/sessions.component';




const routes: Routes = [{
  path: '',
  component: SecurityComponent,
  children: [{
    path: 'activity-log',
    component: ActivityLogComponent,
  }, {
    path: 'sessions',
    component: SessionsComponent,
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
export class SecurityRoutingModule {

}

export const routedComponents = [

  SecurityComponent,
  ActivityLogComponent,
  SessionsComponent
];
