import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { PaymentStatusViewComponent } from '../shared/payment-status-button/payment-status-button.component';
import { CheckboxButtonViewComponent } from '../shared/smart-table-custom/checkbox-view.component';

@Component({
  selector: 'payments',
  styleUrls: ['./payments.component.scss'],
  templateUrl: './payments.component.html',
})
export class PaymentsComponent {

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
      dateTime: {
        title: 'Created Date',
        type: 'Number',
      },
      paymentId: {
        title: 'Payment ID',
        type: 'string',
      },
      subscription: {
        title: 'Package',
        type: 'string'
      },
      paymentMethod: {
        title: 'Payment Method',
        type: 'string'
      },
      firstName: {
        title: 'Payer Name',
        type: 'string'
      },
      email: {
        title: 'Payer Email',
        type: 'string'
      },
      isPayment: {
        title: 'Status',
        type: 'custom',
        valuePrepareFunction: (cell, row) => {
          return {
            status: cell ? "success" : "created",
            caption: cell ? "success" : "created",
          };
        },
        renderComponent: PaymentStatusViewComponent,
        filterFunction(cell?: string, search?: string): boolean {

          let success = this._translateService.instant("general.success").toUpperCase();
          let created = this._translateService.instant("general.created").toUpperCase();

          cell = cell ? success : created;

          if (!search)
            return true;

          if (cell.toLowerCase().startsWith(search.toLowerCase())) {
            return true;
          }

          return false;
        }
      },
      price: {
        title: 'Amount',
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