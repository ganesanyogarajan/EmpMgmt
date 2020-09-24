import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  private domainURI = 'http://localhost:50127/api/employee/';
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newReq = request.clone({
      url:this.domainURI+request.url
    });
    
    return next.handle(newReq).pipe(catchError(this.handleError));
  }
  handleError(error:HttpErrorResponse) {
    return throwError("Error in http server");
  }
}
