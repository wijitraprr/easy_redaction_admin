import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { CheckboxButtonViewComponent } from '../shared/smart-table-custom/checkbox-view.component';
import { StatusButtonViewComponent } from '../shared/status-button/status-button-view.component';

@Component({
  selector: 'subscribers',
  styleUrls: ['./subscribers.component.scss'],
  templateUrl: './subscribers.component.html',
})
export class SubscribersComponent {

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
      thumbnail: {
        title: 'Photo',
        type: 'html',
        class: 'center',
        sort: false,
        filter: false,
        valuePrepareFunction: (cell, row) => {
          //return '<img class="img-thumnail" src="../assets/images/camera3.jpg"/>';
          return '<div class="img-thumnail"><a href="#"><img class="picture" src="../assets/images/no-photo.png"/></a></div>'
        }

      },
      email: {
        title: 'Email',
        type: 'string',
      },
      firstName: {
        title: 'Name',
        type: 'string',
      },
      organization: {
        title: 'Organization',
        type: 'string'
      },
      subscription: {
        title: 'Subscription',
        type: 'string'
      },
      isActive: {
        title: 'Status',
        type: 'custom',
        valuePrepareFunction: (cell, row) => {
          return {
            status: cell ? "active" : "inactive",
            caption: cell ? "active" : "inactive",
          };
        },
        renderComponent: StatusButtonViewComponent,
        filterFunction(cell?: string, search?: string): boolean {

          let active = this._translateService.instant("general.active").toUpperCase();
          let inactive = this._translateService.instant("general.inactive").toUpperCase();

          cell = cell ? active : inactive;

          if (!search)
            return true;

          if (cell.toLowerCase().startsWith(search.toLowerCase())) {
            return true;
          }

          return false;
        }
      },
      actions: {
        title: 'Actions',
        class: 'ng2-smart-actions',
        type: 'html',
        filter: false,
        sort: false,
        valuePrepareFunction: (cell, row) => {
          return `<div class="icon"><a class= "ng2-smart-action ng2-smart-action-edit-edit"><a href="#/pages/my-files/my-files-edit"><i class="ion-edit" title="Edit" ></i></a><a class="ng2-smart-action ng2-smart-action-delete-delete" title="Delete"><i class="ion-trash-a"></i></a></div>`
        },
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
