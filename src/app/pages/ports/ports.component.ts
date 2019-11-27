import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { CheckboxButtonViewComponent } from '../shared/smart-table-custom/checkbox-view.component';

@Component({
  selector: 'ports',
  styleUrls: ['./ports.component.scss'],
  templateUrl: './ports.component.html',
})
export class PortsComponent {

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
          return '<div class="img-thumnail"><a href="#"><img class="picture" src="../assets/images/port.png"/></a></div>'
        }

      },
      country: {
        title: 'Country',
        type: 'string',
      },
      portLocate: {
        title: 'Port',
        type: 'string',
      },
      unlocodeID: {
        title: 'UN LOCODE',
        type: 'string',
      },
      inPort: {
        title: 'In Port',
        type: 'string',
      },
      expected: {
        title: 'Expected',
        type: 'string',
      },
      portStatus: {
        title: 'Status',
        type: 'string',
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
