import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpHeaders } from "@angular/common/http";
import 'rxjs/Rx';
import { EnvironmentSpecificService } from "../../environment-specific.service";

@Injectable()
export class PackagesService { 

    apiUrl: any;

    constructor(private _http: HttpClient, private _envSpecific: EnvironmentSpecificService) {
        this.apiUrl = this._envSpecific.envSpecific.apiUrl;
    }

    addPackage(data): Observable<any> {
        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this._http.post(this.apiUrl + '/packages/addPackage', data, {headers: headers}).map((response: Response) => {
            return response;
        });
    }

    getPackages(): Observable<any> {
        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this._http.get(this.apiUrl + '/packages/getPackages', {headers: headers}).map((response: Response) => {
            return response;
        });
    }

    getPackage(id): Observable<any> {
        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this._http.get(this.apiUrl + '/packages/getPackages/' + id, {headers: headers}).map((response: Response) => {
            return response;
        });
    }

    updatePackage(data): Observable<any> {
        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this._http.post(this.apiUrl + '/packages/updatePackage', data, {headers: headers}).map((response: Response) => {
            return response;
        });
    }

    updateStatus(id, status): Observable<any> {
        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this._http.post(this.apiUrl + '/packages/updateStatus', {id: id, status: status}, {headers: headers}).map((response: Response) => {
            return response;
        });
    }
}