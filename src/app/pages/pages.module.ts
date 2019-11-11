import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { LogOutModule } from './logout/logout.module';
import { SharedModule } from './shared/shared.module';
import { CheckboxButtonViewComponent } from './shared/smart-table-custom/checkbox-view.component';
import { TerminateButtonViewComponent } from './shared/terminate-button/terminate-button-view.component';
import { StatusButtonViewComponent } from './shared/status-button/status-button-view.component';
import { ViewButtonViewComponent } from './shared/view-button/view-button-view.component';
import { PaymentStatusViewComponent } from './shared/payment-status-button/payment-status-button.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule, 
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
    LogOutModule,
    SharedModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    CheckboxButtonViewComponent,
    TerminateButtonViewComponent,
    StatusButtonViewComponent,
    ViewButtonViewComponent,
    PaymentStatusViewComponent
    
  ],
  entryComponents :[
    CheckboxButtonViewComponent,
    TerminateButtonViewComponent,
    StatusButtonViewComponent,
    ViewButtonViewComponent,
    PaymentStatusViewComponent
  ]
})
export class PagesModule {
}
