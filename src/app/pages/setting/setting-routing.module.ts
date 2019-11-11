import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingComponent } from './setting.component';
import { DatabaseComponent } from './database/database.component';
import { StorageComponent } from './storage/storage.component';
import { EmailComponent } from './email/email.component';
import { LanguageComponent } from './language/language.component';



const routes: Routes = [{
  path: '',
  component: SettingComponent,
  children: [{
    path: 'database',
    component: DatabaseComponent,
  }, {
    path: 'storage',
    component: StorageComponent,
  },
  {
    path: 'email',
    component: EmailComponent,
  },
  {
    path: 'language',
    component: LanguageComponent,
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
export class SettingRoutingModule {

}

export const routedComponents = [

  SettingComponent,
  DatabaseComponent,
  StorageComponent,
  EmailComponent,
  LanguageComponent
];
