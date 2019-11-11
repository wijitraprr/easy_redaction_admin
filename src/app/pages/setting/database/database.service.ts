import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpHeaders } from "@angular/common/http";
import 'rxjs/Rx';
import { EnvironmentSpecificService } from "../../../environment-specific.service";

@Injectable()
export class DatabaseService { 

    apiUrl: any;

    constructor(private _http: HttpClient, private _envSpecific: EnvironmentSpecificService) {
        this.apiUrl = this._envSpecific.envSpecific.apiUrl;
    }

    testConnection(data: any): Observable<any> {

        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this._http.post(this.apiUrl + '/dbSettings/testDbConnection/?' + $.param(data), {}, {headers: headers}).map((response: Response) => {
            return response;
        });
    }

    saveDatabase(data: any): Observable<any> {
        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this._http.post(this.apiUrl + '/dbSettings/saveDatabase/', data, {headers: headers}).map((response: Response) => {
            return response;
        });
    }


}