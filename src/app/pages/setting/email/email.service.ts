import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpHeaders } from "@angular/common/http";
import 'rxjs/Rx';
import { EnvironmentSpecificService } from "../../../environment-specific.service";

@Injectable()
export class EmailService { 

    apiUrl: any;

    constructor(private _http: HttpClient, private _envSpecific: EnvironmentSpecificService) {
        this.apiUrl = this._envSpecific.envSpecific.apiUrl;
    }


    saveSmtpSetting(data: any) : Observable<any> {
        return this._http.post(this.apiUrl + "/settings/smtpConfig", data).map(res => {
            return res;
        });
    }

    testEmailSetting(data: any) : Observable<any> {
        return this._http.post(this.apiUrl + "/settings/testEmailSetting", data).map(res => {
            return res;
        });
    }


}