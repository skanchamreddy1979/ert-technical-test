import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    };
    constructor(private http: HttpClient) { }
    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
      return this.http.get(path, { params })
        .pipe(catchError(this.formatErrors));
    }
    // tslint:disable-next-line: typedef
    formatErrors(error: any) {
      return throwError(error);
    }

}
