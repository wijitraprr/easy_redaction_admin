import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PackagesRoutingModule, routedComponents } from './packages-routing.module';
import { PackagesService } from './packages.service';
import { CustomActionViewComponent } from './packages-list/custom-action-view.component';
import { ModalComponent } from '../ui-features/modals/modal/modal.component';
import { ConfirmModalComponent } from '../ui-features/modals/modal/confirm-modal.component';



@NgModule({
  imports: [
    ThemeModule,
    PackagesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    CustomActionViewComponent,
    ConfirmModalComponent
  ],
  providers: [
    SmartTableService,
    PackagesService
  ],
  entryComponents: [
    CustomActionViewComponent,
    ConfirmModalComponent
  ]
})
export class PackagesModule { }
