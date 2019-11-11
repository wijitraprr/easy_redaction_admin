import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class FileService {
    apiUrl: any; // http://localhost:5333/api

    _baseURL: string = 'http://localhost:xxxx/api/fileupload/'

    constructor() {
       
    }

    
}