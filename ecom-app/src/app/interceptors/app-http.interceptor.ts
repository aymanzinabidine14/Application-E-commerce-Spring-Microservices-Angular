import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthServiceService} from "../services/auth-service.service";
import {Observable} from "rxjs";


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor{

  constructor(private authService:AuthServiceService,) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(!request.url.includes("/auth/login") && !request.url.includes("/Inscription")){
      //console.log("huuuu    "+this.authService.accessToken)
      let token="";
      token=this.authService.accessToken;

      console.log("token :"+token);

      let newReq=request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),

      })

      return next.handle(newReq)
    }else{
      return next.handle(request);
    }

  }



}
