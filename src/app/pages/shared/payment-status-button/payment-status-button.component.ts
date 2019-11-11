import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'payment-status-button',
  template: `
  <div class="status-custom-button {{status}}">
  <span>{{caption}}</span>
</div>
  `,
  styleUrls: ['./payment-status-button.scss'],
})
export class PaymentStatusViewComponent implements ViewCell, OnInit {

  caption: string;
  status: string;

  // value should be an object.
  @Input() value: any;
  @Input() rowData: any;

  @Output() click = new EventEmitter<any>();

  ngOnInit() {

    this.caption = this.value.caption;

    if (this.value.status) {
      this.status = this.value.status.toLowerCase();
    }
  }
} 
