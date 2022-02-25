import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

    
  constructor(private userSerivce: UserService,
    private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkStatus(state.url);
  }
  
  checkStatus=(url:string)=>{
    if (this.userSerivce.isLoggedIn) {
      //User is active
      return true;
      }

      //User is not active, and tried to access some other URL, and thus redirecting the user to the Login page
      this.userSerivce.redirectUrl = url;
      this.router.navigate(['/login']);
      return false;
      }
  }

