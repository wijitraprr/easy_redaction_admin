import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table/ng2-smart-table.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { SupportRoutingModule, routedComponents } from './support-routing.module';




@NgModule({
  imports: [
    ThemeModule,
    SupportRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
  ],
})
export class SupportModule { }
