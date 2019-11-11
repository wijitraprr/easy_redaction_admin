import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ChartjsBarComponent } from './chartjs-bar.component';
import { ChartjsLineComponent } from './chartjs-line.component';
import { ChartjsPieComponent } from './chartjs-pie.component';
import { ChartjsMultipleXaxisComponent } from './chartjs-multiple-xaxis.component';
import { ChartjsBarHorizontalComponent } from './chartjs-bar-horizontal.component';
import { ChartjsRadarComponent } from './chartjs-radar.component';
import { AnalyticsRoutingModule, routedComponents } from './analytics-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';



const components = [
  ChartjsBarComponent,
  ChartjsLineComponent,
  ChartjsPieComponent,
  ChartjsMultipleXaxisComponent,
  ChartjsBarHorizontalComponent,
  ChartjsRadarComponent,
];

@NgModule({
  imports: [ThemeModule, AnalyticsRoutingModule, NgxEchartsModule, NgxChartsModule,ChartModule],
  declarations: [...routedComponents, ...components],
})
export class AnalyticsModule { }
