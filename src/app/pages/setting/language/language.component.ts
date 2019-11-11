import { Component } from '@angular/core';
//import { NgUploaderOptions } from 'ngx-uploader';
import { EnvironmentSpecificService } from '../../../environment-specific.service';
import { NbToastrService } from '@nebular/theme';
import { LanguageService } from './language.service';

@Component({
  selector: 'language',
  styleUrls: ['./language.component.scss'],
  templateUrl: './language.component.html',
})
export class LanguageComponent {

  apiUrl: any;

 // fileUploaderOptions: NgUploaderOptions;

  languages: Array<string>;

  constructor(private _envSpecificSvc: EnvironmentSpecificService, private _toastrService: NbToastrService, private _langageService: LanguageService) {

    this.apiUrl = this._envSpecificSvc.envSpecific.apiUrl;

  ;

  }

  onUploadCompleted(data) {

    //let result = JSON.parse(data.response);

    if (data.progress.percent == 100) {

      // this.languages = JSON.parse(result.languages.toLowerCase());
      this._toastrService.success("", "Language file uploaded successfully!");
    } else {

      this._toastrService.danger("", "Invalid File! Please check the language template file and try again.");
      // if (result.stacktrace) {

      //   console.log(result.stacktrace);
      // }
    }
  }

  downloadTemplate() {
    this._langageService.download().subscribe(data => {
      this.downloadFile(data, "language-template.xlsx", "application/vnd.ms-excel");

    }, error => {
      this._toastrService.danger("", "Unable to download language template! Please try again later.");
    });
  }

  private downloadFile(data: ArrayBuffer, fileName: string, contentType: string) {
    let blob = new Blob([data], { type: contentType });
    let url = window.URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", fileName);
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
}

  private getAuthorizationToken() {

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {

      return currentUser.token;
    }
    return null;
  }
}
