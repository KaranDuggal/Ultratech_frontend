import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from 'src/app/services/auth/auth.service'

@Injectable()
export class HeadInterceptor implements HttpInterceptor {

  constructor(
    private authService:AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenVal = this.authService.getToken();
    const clonedRequest = request.clone({
      headers: request
        .headers
        .set('Authorization', tokenVal ? `Bearer ${tokenVal}` : '')
        .set('API_KEY', 'jwtdoctorappgsbitlabs')

    });
    //Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
    // return next.handle(request);
  }
}
