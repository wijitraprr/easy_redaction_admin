import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';


@Component({
    selector: 'terminate-button-view',
    template: ` 
    <div class="terminate">
    <button  class="btn btn-warning btn-demo">Terminate</button>
    </div>
  `,
    styleUrls: ['./terminate-button-view.scss'],
})
export class TerminateButtonViewComponent  {

    
} 
