import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { LogOutComponent } from './logout.component';



@NgModule({
  imports: [
    ThemeModule,
    
  ],
  declarations: [
    LogOutComponent,
  ],
})
export class LogOutModule { }
