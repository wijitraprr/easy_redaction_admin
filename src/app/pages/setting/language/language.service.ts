import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { EnvironmentSpecificService } from "../../../environment-specific.service";

@Injectable()
export class LanguageService { 

    apiUrl: any;

    constructor(private _http: HttpClient, private _envSpecific: EnvironmentSpecificService) {
        this.apiUrl = this._envSpecific.envSpecific.apiUrl;
    }

    download(): Observable<any> {

        return this._http.get(this.apiUrl + "/settings/export", { responseType: "arraybuffer"} );
    }

}