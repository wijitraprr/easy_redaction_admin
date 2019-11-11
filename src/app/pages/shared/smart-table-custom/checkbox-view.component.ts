import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { ViewCell } from "ng2-smart-table";

@Component({
    selector: 'checkbox-view',
    template: `
        <nb-checkbox></nb-checkbox>
    `,
    styles: [
      ':host { position: relative; margin-top: 0px; left: 0px; }'
    ]
  })
  export class CheckboxButtonViewComponent implements ViewCell, OnInit {
  
    @Input() value: any;
    @Input() rowData: any;
  
    @Output() save: EventEmitter<any> = new EventEmitter<any>();
  
    ngOnInit() {
  
    }
  
    onChange(value) {
  
      this.value.row.checked = value;
  
    }
  }
  