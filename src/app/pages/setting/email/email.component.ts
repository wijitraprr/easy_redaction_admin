import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { EmailService } from './email.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'email',
  styleUrls: ['./email.component.scss'],
  templateUrl: './email.component.html',
})
export class EmailComponent implements OnInit {

  smtpSettingFormSubmitted: boolean = false;
  testEmailSettingFormSubmitted: boolean = false;

  emailConfig: any;

  @ViewChild("smtpSettingForm") smtpSettingForm: any;
  @ViewChild("testEmailSettingForm") testEmailSettingForm: any;
  
  constructor(private _cdRef: ChangeDetectorRef, private _emailService: EmailService, private _toastrService: NbToastrService) {
    
  }

  ngOnInit(): void {
    this.populateEmail();
  }

  onChange(event) {

    this.emailConfig.requireAuthentication = event.returnValue;
    this._cdRef.detectChanges();
  }

  private populateEmail() {
    this.emailConfig = {
      serverHost: "",
      userName: "",
      smtpPort: "",
      password: "",
      encryption: "None",
      senderDisplayName: "",
      requireAuthentication: false
    };

  }
  
  onSaveSmtpSetting(form, isValid) {
    this.smtpSettingFormSubmitted = true;
    
    if (!isValid) {
      return;
    }

    this._emailService.saveSmtpSetting(form).subscribe(response => {

      if (response.status == "error") {
        this._toastrService.danger("", "Unable to update SMTP Setting!");
        return;
      }

      this._toastrService.success("", "SMTP settings updated successfully!");

      this.smtpSettingFormSubmitted = false;

      this.smtpSettingForm.reset();
      this.populateEmail();

    });

     
  }

  onTestEmailSetting(form: any, isValid: boolean) {
    this.testEmailSettingFormSubmitted = true;

    if (!isValid) {
      return;
    }

    this._emailService.testEmailSetting(form).subscribe(response => {

      if (response.status == "error") {
        this._toastrService.danger("", "Unable to send test email! Please check the SMTP setttings");
        return;
      }

      this._toastrService.success("", "Test email sent successfully!");

    });

    
    this.testEmailSettingFormSubmitted = false;

    this.testEmailSettingForm.reset();

  }
}
