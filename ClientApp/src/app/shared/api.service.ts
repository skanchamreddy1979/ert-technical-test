import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://api.punkapi.com/v2';

  constructor(private httpClient: HttpClient) {

  }

  public get<TRes>(url: string, params?: any, headers?: HttpHeaders) {

    if (!params) {
      params = {};
    }

    const observable = this.getOptions(headers).pipe(switchMap(options => {
      const request = this.httpClient.get<TRes>(`${this.url}` + url, {
        ...options,
        params
      });
      return request;
    }));

    return observable;
  }

  public post<TRes>(url: string, req?: any, params?: any, headers?: HttpHeaders) {

    if (!params) {
      params = {};
    }

    const observable = this.getOptions(headers).pipe(switchMap(options => {
      const request = this.httpClient.post<TRes>(`${this.url}` + url, req, {
        ...options,
        params
      });
      return request;
    }));

    return observable;
  }

  public put<TRes>(url: string, req?: any, params?: any, headers?: HttpHeaders) {

    if (!params) {
      params = {};
    }

    const observable = this.getOptions(headers).pipe(switchMap(options => {
      const request = this.httpClient.put<TRes>(`${this.url}` + url, req, {
        ...options,
        params
      });
      return request;
    }));

    return observable;
  }

  public delete<TRes>(url: string, params?: any, headers?: HttpHeaders) {

    if (!params) {
      params = {};
    }

    const observable = this.getOptions(headers).pipe(switchMap(options => {
      const request = this.httpClient.delete<TRes>(`${this.url}` + url, {
        ...options,
        params
      });
      return request;
    }));

    return observable;
  }

  private getOptions(headers?: HttpHeaders) {
    const options = {
      headers: headers || new HttpHeaders({
        Accept: 'application/json'
      })
    };

    // options.headers = options.headers
    //   .append("Authorization", `Bearer {token}`);

    return of(options);

  }

}
