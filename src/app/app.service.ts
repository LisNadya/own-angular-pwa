import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class AppService {
    
    constructor (protected httpClient: HttpClient){
    }
    public defaultHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    private httpOptions = {
        headers: this.defaultHeaders,
        observe: 'body' as 'body',
        reportProgress: false
    };
    getUsers() {
        const URL = `https://my.api.mockaroo.com/users.json?key=fc2ee410`;
        return this.httpClient.get<any>(URL);
    }
    addUser(data: any) {
        const URL = `https://my.api.mockaroo.com/users.json?key=fc2ee410&__method=POST`;
        return this.httpClient.post<any>(URL, data);
    }
}