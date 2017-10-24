import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = location.href;

@Injectable()
export class ApiService {
    private fullUrl: string;
    constructor(
        private http: Http
    ) {
    }

    public setPath(url) {
        this.fullUrl = url;
    }
    public getAll(): Observable<any[]> {
        return this.http
            .get(this.fullUrl)
            .map(response => {
                return response.json();
            })
            .catch(this.handleError);
    }

    public create(itemData: any): Observable<any> {
        return this.http
            .post(this.fullUrl, itemData)
            .map(response => {
                return (response.json());
            })
            .catch(this.handleError);
    }

    public getById(anyId: number): Observable<any> {
        return this.http
            .get(this.fullUrl)
            .map(response => {
                return (response.json());
            })
            .catch(this.handleError);
    }

    public update(itemData: any): Observable<any> {
        return this.http
            .put(this.fullUrl, itemData)
            .map(response => {
                return (response.json());
            })
            .catch(this.handleError);
    }

    public deleteById(anyId: number): Observable<null> {
        return this.http
            .delete(this.fullUrl)
            .map(response => null)
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}