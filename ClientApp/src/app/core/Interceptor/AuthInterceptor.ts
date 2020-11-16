import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { filter, tap } from 'rxjs/operators';
  import { Router } from '@angular/router';

  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      let reqHeaders: HttpHeaders;
      reqHeaders = new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: 'Sat, 01 Jan 2000 00:00:00 GMT',
        'If-Modified-Since': '0'
      });

      const apiReq = request.clone({
        headers: reqHeaders
      });
      return new Observable(observer => {
        next.handle(request)
        .subscribe(event => {
            if (event instanceof HttpResponse) {
                observer.next(event);
            }
        },
        () => {
            observer.complete();
        });
      });
    }
  }
