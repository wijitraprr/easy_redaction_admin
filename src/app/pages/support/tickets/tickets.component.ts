import { Component } from '@angular/core';
import { ViewButtonViewComponent } from '../../shared/view-button/view-button-view.component';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
  selector: 'tickets',
  styleUrls: ['./tickets.component.scss'],
  templateUrl: './tickets.component.html',
})
export class TicketsComponent {

  _common: any;
  active: any;
  onDelete(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  onEdit(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  niceBytes(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  data: Array<any>;
  isTableView: boolean = true;
  pagedData: Array<any>;
  isExecuting: boolean = false;

  settings = {
    actions: null,
    add: null,
    edit: null,
    delete: null,
    pager: {
      perPage: 10,
    },
    columns: {
      firstName: {
        title: 'Contact',
        type: 'string'
      },
      subject: {
        title: 'Subject',
        type: 'string'
      },
      state: {
        title: 'State',
        type: 'string'
      },
      groupAgent: {
        title: 'Group/Agent',
        type: 'string'
      },
      priority: {
        title: 'Priority',
        type: 'string'
      },
      status: {
        title: 'Status',
        type: 'string'
      },
      action: {
        title: 'Action',
        type: 'custom',
        filter: null,
        sort: null,
        valuePrepareFunction: (cell, row) => {
          return { row: row, cell: cell };
      },
      renderComponent: ViewButtonViewComponent

      },

    }
  };


  source: LocalDataSource = new LocalDataSource();
  isSingleView: boolean = true;
  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}