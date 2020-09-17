import {
  HttpInterceptor, HttpProgressEvent, HttpSentEvent,
  HttpHeaderResponse, HttpUserEvent, HttpRequest,
  HttpResponse, HttpHandler, HttpEvent, HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | HttpEvent<any>> {

    let reqHeaders: HttpHeaders;
    reqHeaders = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Expires: 'Sat, 01 Jan 2000 00:00:00 GMT',
      'If-Modified-Since': '0'
    });

    const apiReq = req.clone({
      headers: reqHeaders
    });
    return next.handle(apiReq).pipe(
      // There may be other events besides the response.
      filter(event => event instanceof HttpResponse),
      tap((event: HttpResponse<any>) => {

      })
    );
  }
}
