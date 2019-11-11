import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'custom-action-view',
  template: ` 
    <div class="icon">
        <a href="#" (click)="onEdit()">
            <i class="ion-edit" title="Edit" ></i>
        </a>
        <a href="#" class="ng2-smart-action ng2-smart-action-delete-delete" title="Delete" (click)="onDelete()">
            <i class="ion-trash-a"></i>
        </a>
    </div>
  `,
  styleUrls: ['./custom-action-view.scss'],
})
export class CustomActionViewComponent implements ViewCell, OnInit {

  caption: string;
  status: string;

  // value should be an object.
  @Input() value: any;
  @Input() rowData: any;

  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  ngOnInit() {

  }

  onEdit() {
      this.edit.emit(this.value.row);
      return false;
  }

  onDelete() {
      this.delete.emit(this.value.row);
      return false;
  }
} 
