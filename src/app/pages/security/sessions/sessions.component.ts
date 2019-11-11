import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import { StatusButtonViewComponent } from '../../shared/status-button/status-button-view.component';
import { TerminateButtonViewComponent } from '../../shared/terminate-button/terminate-button-view.component';


@Component({
  selector: 'sessions',
  styleUrls: ['./sessions.component.scss'],
  templateUrl: './sessions.component.html',
})
export class SessionsComponent {

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
      user: {
        title: 'User',
        type: 'string'
      },
      ipAddress: {
        title: 'IPAddress',
        type: 'string'
      },
      lastActive: {
        title: 'Last Active Time',
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
      renderComponent: TerminateButtonViewComponent

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
