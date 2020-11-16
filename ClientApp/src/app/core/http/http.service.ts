import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestType } from '../RequestType';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  formatErrors(error: any) {
    return throwError(error);
  }

  execute<T>(requestType: RequestType, relativeURL: string, httpParams: HttpParams, data: any) {
    switch (requestType) {
      case RequestType.GET:
        return this.httpClient.get<T>(environment.apiBaseUrl + relativeURL, { params: httpParams }).pipe(catchError(this.formatErrors));

      case RequestType.POST:
        return this.httpClient.post<T>(environment.apiBaseUrl + relativeURL,
          JSON.stringify(data), this.httpOptions).pipe(catchError(this.formatErrors));

      case RequestType.PUT:
        return this.httpClient.put<T>(environment.apiBaseUrl + relativeURL, JSON.stringify(data)).pipe(catchError(this.formatErrors));

      case RequestType.DELETE:
        return this.httpClient.delete<T>(environment.apiBaseUrl + relativeURL).pipe(catchError(this.formatErrors));
    }
  }
}
