import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthServiceService} from "../services/auth-service.service";
import {Observable} from "rxjs";


@Injectable({
  providedIn:'root'
})
export class authorizationGuard implements CanActivate{

  constructor(private authServiceService:AuthServiceService,private router:Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authServiceService.roles.includes("ADMIN")){
      return true;
    }else{
      this.router.navigateByUrl("admin/notAuthorized");
      return false
    }
  }




};
