import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from 'app.config';

@Injectable()
export class GithubInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if(request.url.includes('raw.githubusercontent.com')){
      return next.handle(request);
    }

    let headers = new HttpHeaders({'Authorization': `token ${AppConfig.GITHUB_TOKEN}`})
    let clone = request.clone({headers});
    return next.handle(clone);
  }
}
