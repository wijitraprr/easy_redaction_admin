import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table/ng2-smart-table.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { SettingRoutingModule, routedComponents } from './setting-routing.module';
import { DatabaseService } from './database/database.service';
import { StorageService } from './storage/storage.service';
import { EmailService } from './email/email.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageService } from './language/language.service';

@NgModule({
  imports: [
    ThemeModule,
    SettingRoutingModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
    DatabaseService,
    StorageService,
    EmailService,
    LanguageService
  ],
})
export class SettingModule { }
