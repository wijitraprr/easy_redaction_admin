import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-confirm-modal',
  template: `
    <div class="modal-header">
      <span>{{ modalHeader }}</span>
      <button class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      {{ modalContent }}
    </div>
    <div class="modal-footer">
      <button class="btn btn-md btn-primary" (click)="closeModal('yes')">Yes</button>
      <button class="btn btn-md btn-primary" (click)="closeModal('no')">No</button>
    </div>
  `,
})
export class ConfirmModalComponent {

  modalHeader: string;
  modalContent = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`;

  constructor(private activeModal: NgbActiveModal) { }

  closeModal(result) {
    this.activeModal.close(result);
  }
}
