import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { LogOutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [{
      path: 'dashboard',
      component: DashboardComponent,
    }, {
      path: 'reports',
      loadChildren: './reports/reports.module#ReportsModule',
    },
    {
      path: 'vassels',
      loadChildren: './vassels/vassels.module#VasselsModule',
    },
    {
      path: 'ports',
      loadChildren: './ports/ports.module#PortsModule',
    },
    {
      path: 'maps',
      loadChildren: './maps/maps.module#MapsModule',
    },
    {
      path: 'support',
      loadChildren: './support/support.module#SupportModule',
    },
    {
      path: 'logout',
      component: LogOutComponent,
    }, {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }, {
      path: '**',
      component: NotFoundComponent,
    }],
  }];


const config: ExtraOptions = {
  useHash: true,
  enableTracing: false
};

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
