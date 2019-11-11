import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
//import { NgxEchartsService } from 'ngx-echarts';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-bubble-map',
  styleUrls: ['./bubble-map.component.scss'],
  template: `
    <nb-card>
    <nb-card-header>Bubble Maps</nb-card-header>
      <nb-card-body>
        <div echarts [options]="options" class="echarts"></div>
      </nb-card-body>
    </nb-card>
  `,
})
export class BubbleMapComponent implements OnDestroy {
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

 
}
