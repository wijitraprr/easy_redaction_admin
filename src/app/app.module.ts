/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbToastrModule } from '@nebular/theme';
import { EnvironmentSpecificResolver } from './environment-specific-resolver.service';
import { EnvironmentSpecificService } from './environment-specific.service';
import { AuthorizedModule } from './pages/authorized/authorized.module';
import { FormsModule } from './pages/forms/forms.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    AuthorizedModule,
    NbToastrModule.forRoot({
      destroyByClick: true,
      hasIcon: true,
      duration: 3000
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    EnvironmentSpecificResolver,
    EnvironmentSpecificService
  ],
})
export class AppModule {
}
