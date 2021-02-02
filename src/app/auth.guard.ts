import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private Auth: AuthService, private router: Router, private user: UserService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    /* if (!this.Auth.isLoggedIn) {
       this.router.navigate(['login']);
     }
    
     return this.Auth.isLoggedIn; // because we have uset get on the decalartion il doit retourner vraie ou faux
   */
    if (this.Auth.isLoggedIn) {
      return true;
    }
    return this.user.isLoggedIn().pipe(map(res => {
      console.log(res)
      if (res.status) {
        this.Auth.setLoggedIn(true);
        return true;
      }
      else {
        this.router.navigate(['login']);
        return false
      }
    }))
  }

}
