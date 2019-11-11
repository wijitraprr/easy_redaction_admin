import { Component, ViewChild } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Component({
  selector: 'storage',
  styleUrls: ['./storage.component.scss'],
  templateUrl: './storage.component.html',
})
export class StorageComponent {

  @ViewChild("storageSettingForm") storageSettingForm;
  
  storageConnectionValid: boolean = false;
  submitted: boolean = false;

  constructor(private _toastrService: NbToastrService, private _router: Router, private _storageService: StorageService) {

  }
  
  testStorageConnection(form: any, isValid: boolean) {

    this.submitted = true;
    if (!isValid) {
      return;
    }

    this._storageService.testStorageConnection(form).subscribe(result => {
      if (result.status == "ok") {
        this.storageConnectionValid = true;

        this._toastrService.success("", "Test connection successful!");
      } else {
        this.storageConnectionValid = false;
        this._toastrService.danger("", "Unable to connect to storage server! Please check the settings");
      }
    }, error => {

      console.log(error);

    });
  }

  onSubmit() {

    this._storageService.saveStorageSetting(this.storageSettingForm.value).subscribe(result => {

      if (result.status == "ok") {
        this.storageSettingForm.form.reset();
        this.storageConnectionValid = false;
        this.submitted = false;

        this._toastrService.success("", "Storage settings updated successfully!");
      } else {

        this._toastrService.danger("", "Save storage setting failed");
      }
    }, error => {
      console.log(error);
    });

  }

  onCancel() {
    this._router.navigate(["/pages/dashboard"]);
  }
  
}
