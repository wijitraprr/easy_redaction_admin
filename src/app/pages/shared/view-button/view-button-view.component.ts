import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';


@Component({
    selector: 'view-button-view',
    template: ` 
    <div class="terminate">
    <button  class="btn btn-warning">View</button>
    </div>
  `,
    styleUrls: ['./View-button-view.scss'],
})
export class ViewButtonViewComponent  {

    
} 
