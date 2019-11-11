import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import { CheckboxButtonViewComponent } from '../../shared/smart-table-custom/checkbox-view.component';


@Component({
  selector: 'activity-log',
  styleUrls: ['./activity-log.component.scss'],
  templateUrl: './activity-log.component.html',
})
export class ActivityLogComponent {

  _common: any;
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
            checked: {
                title: '#',
                filter: false,
                type: 'custom',
                valuePrepareFunction: (cell, row) => {
                    return { row: row, cell: cell };
                },
                renderComponent: CheckboxButtonViewComponent

            },
            dateTime: {
                title: 'Date & Time',
                type: 'Number',
            },
            action: {
                title: 'Action',
                type: 'String',
            },
            file: {
                title: 'File.',
                type: 'string'
            },
            user: {
                title: 'User',
                type: 'string'
            },
            ipAddress: {
                
              title: 'IP Address',
              type: 'string'
          },
            device: {
                title: 'Device',
                type: 'string'
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

