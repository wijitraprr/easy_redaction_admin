import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AuthorizedRoutingModule, routedComponents } from './authorized-routing.module';
import { AuthorizedComponent } from './authorized.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  imports: [
    ThemeModule,
    AuthorizedRoutingModule,
  ],
  declarations: [
    AuthorizedComponent,
    LoginComponent,
    ...routedComponents,    
  ],
})
export class AuthorizedModule { }
