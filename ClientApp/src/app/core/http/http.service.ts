import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    })
  };
  constructor(private http: HttpClient) { }
  formatErrors(error: any) {
    return throwError(error);
  }
  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }
  put(path: string, body = {}): Observable<any> {
    return this.http.put(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }
  post(path: string, body = {}): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body),
      this.httpOptions
    ).pipe(catchError(this.formatErrors));
  }
  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.apiUrl}${path}`
    ).pipe(catchError(this.formatErrors));
  }
}
