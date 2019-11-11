import { Component } from '@angular/core';
import { LocalDataSource } from '../../../../../node_modules/ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import { CheckboxButtonViewComponent } from '../../shared/smart-table-custom/checkbox-view.component';
import { StatusButtonViewComponent } from '../../shared/status-button/status-button-view.component';
import { PackagesService } from '../packages.service';
import { CustomActionViewComponent } from './custom-action-view.component';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../ui-features/modals/modal/modal.component';
import { ConfirmModalComponent } from '../../ui-features/modals/modal/confirm-modal.component';
import { NbToastrService } from '@nebular/theme';

@Component({
    selector: 'packages-list',
    styleUrls: ['./packages-list.component.scss'],
    templateUrl: './packages-list.component.html',
})
export class PackagesListComponent {

    _common: any;


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
      packageName: {
        title: 'Package',
        type: 'string',
      },
      packageType: {
        title: 'Type',
        type: 'string',
        valuePrepareFunction: (cell, row) => {

          if (cell == "Time") {
            return "Duration";
          }

          return cell;
        },
        filterFunction(cell?: string, search?: string): boolean {

          let value = cell == "Time" ? "duration" : "storage";

          if (value.includes(search.toLowerCase())) {
            return true;
          }

          return false;
        }
      },
      duration: {
        title: 'Duration',
        type: 'number',
        valuePrepareFunction: (cell, row) => {

          if (cell == "00:00:00") {
            return "";
          }

          return cell;
        }
      },
      storageSize: {
        title: 'Storage Limit',
        type: 'string'
      },
      price: {
        title: 'Price',
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

          let value = cell ? "active" : "inactive";

          if (value.includes(search.toLowerCase())) {
            return true;
          }

          return false;
        }
      },
      actions: {
        title: 'Actions',
        class: 'ng2-smart-actions',
        type: 'custom',
        filter: false,
        sort: false,
        valuePrepareFunction: (cell, row) => {
          return {
            data: cell,
            row: row
          };
        },
        renderComponent: CustomActionViewComponent,
        onComponentInitFunction: (instance) => {
          instance.edit.subscribe(row => {
            this.onEdit({ item: row });
        });
          instance.delete.subscribe(row => {
            this.onDelete({ item: row });
        });
        }
      },
    }
  };


  source: LocalDataSource = new LocalDataSource();
  isSingleView: boolean = true;
  constructor(private service: SmartTableService, private _packagesService: PackagesService,
    private _router: Router, private _modalService: NgbModal,
    private _toastrService: NbToastrService) {
    // const data = this.service.getData();

    // this.source.load(data);
    this.getPackages();
  }

  getPackages() {
    this._packagesService.getPackages().subscribe(response => {
      this.source.load(response.data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  toggleStatus(status) {
    console.log(status);
  }

  onEdit(event): void {

    this._router.navigate(["/pages/packages/package-edit/" + event.item.id]);

  }

  onDelete(event): any {

    let isActive = event.item.isActive;
    let id = event.item.id;

    let modalHeader = "";
    let modalContent = "";

    if (isActive) {
      modalHeader = "Deactivate Confirmation";
      modalContent = "Are you sure you want to deactivate package?"
    } else {
      modalHeader = "Activate Confirmation";
      modalContent = "Are you sure you want to activate package?";
    }

    let activeModal = this._modalService.open(ConfirmModalComponent, { 
      size: 'sm', 
      backdrop: "static",
      container: 'nb-layout' }
    );
    activeModal.componentInstance.modalHeader = modalHeader;
    activeModal.componentInstance.modalContent = modalContent;

    activeModal.result.then(modalResult => {

      if (modalResult == 'yes') {
        // update status
        let toggleStatus = !isActive;

        this._packagesService.updateStatus(id, toggleStatus).subscribe(response => {
          if (response.status == "ok") {
            if (isActive) {
              this._toastrService.success("", "Package deactivated successfully!");
            } else {
              this._toastrService.success("", "Package activated successfully!");
            }
            this.getPackages();
          } else {
            if (isActive) {
              this._toastrService.danger("", "Package deactivation failed!");
            } else {
              this._toastrService.danger("", "Package activation failed!");
            }
          }
        }, error => {
          if (isActive) {
            this._toastrService.danger("", "Package deactivation failed!");
          } else {
            this._toastrService.danger("", "Package activation failed!");
          }
        });
      }
    }, error => {
      console.log(error);
    });

  }
}

