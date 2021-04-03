import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GithubInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers = new HttpHeaders({'Accept': 'application/vnd.github.v3+json', 
    'User-Agent': 'ngdevelop-tech-app',
    'Authorization': `token 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`})
    let clone = request.clone({headers});
    return next.handle(clone);
  }
}
