import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EnvironmentSpecificService } from "../../../environment-specific.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class StorageService {

    apiUrl: any;

    constructor(private _http: HttpClient, private _envSpecific: EnvironmentSpecificService) {
        this.apiUrl = this._envSpecific.envSpecific.apiUrl;
    }

    testStorageConnection(data: any): Observable<any> {
        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this._http.post(this.apiUrl + '/settings/testStorageConnection/?' + $.param(data), {}, {headers: headers}).map((response: Response) => {
            return response;
        });
    }

    saveStorageSetting(data: any): Observable<any> {
        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this._http.post(this.apiUrl + '/settings/saveStorageSetting/', data, {headers: headers}).map((response: Response) => {
            return response;
        });
    }
}