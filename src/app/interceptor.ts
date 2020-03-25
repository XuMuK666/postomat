import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class Interceptor implements HttpInterceptor {
  //
  //
  //Перехватчик пакетов. Добавляет к каждому пакету заголовки с токенами
  //
  //
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
      request = request.clone({
        setHeaders: {
          'enctype': 'multipart/form-data',
          'Access-Control-Allow-Origin' : '*',
          'Accept': '*/*'
        }
      });
      return next.handle(request);
  }
}
