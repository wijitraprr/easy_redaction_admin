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
      path: 'setting',
      loadChildren: './setting/setting.module#SettingModule',
    }, {
      path: 'analytics',
      loadChildren: './analytics/analytics.module#AnalyticsModule',
    },
    {
      path: 'subscribers',
      loadChildren: './subscribers/subscribers.module#SubscribersModule',
    },
    {
      path: 'files',
      loadChildren: './files/files.module#FilesModule',
    },
    {
      path: 'packages',
      loadChildren: './packages/packages.module#PackagesModule',
    },
    {
      path: 'payments',
      loadChildren: './payments/payments.module#PaymentsModule',
    }, {
      path: 'security',
      loadChildren: './security/security.module#SecurityModule',
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
