import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizedComponent } from './authorized.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: '',
  component: AuthorizedComponent,
  children: [{
    path: 'login',
    component: LoginComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AuthorizedRoutingModule {

}

export const routedComponents = [
 
  LoginComponent,
  AuthorizedComponent,
];
