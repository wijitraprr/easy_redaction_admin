import { Component, ViewChild } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { DatabaseService } from './database.service';
import { Router } from '@angular/router';


@Component({
  selector: 'database',
  styleUrls: ['./database.component.scss'],
  templateUrl: './database.component.html',
})
export class DatabaseComponent {

  submitted: boolean = false;
  dbConnectionValid: boolean = false;

  @ViewChild("dbSettingForm") myDbSettingForm: any;

  constructor(private _toastrService: NbToastrService, private _databaseService: DatabaseService, private _router: Router) {

  }

  testDbConnection(value, isValid) {

    this.submitted = true;

    if (!isValid) {
      return;
    }

    this._databaseService.testConnection(value).subscribe(result => {
      console.log(result);

      if (result.status == "ok") {
        this.dbConnectionValid = true;

        this._toastrService.success("", "Test connection successful!");
      } else {

        this.dbConnectionValid = false;
        this._toastrService.danger("", "Unable to connect to database server! Please check the settings");
      }

    }, error => {
      console.log(error);
    });

  }

  onSubmit() {

    this._databaseService.saveDatabase(this.myDbSettingForm.value).subscribe(result => {

      if (result.status == "ok") {
        this.myDbSettingForm.form.reset();
        this.dbConnectionValid = false;
        this.submitted = false;

        this._toastrService.success("", "Database settings updated successfully!");
      } else {


        this._toastrService.danger("", "Save database setting failed");
      }


    }, error => {

    });

  }

  onCancel() {
    this._router.navigate(["/pages/dashboard"]);
  }
}
