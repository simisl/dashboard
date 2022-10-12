import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: UserService,private route: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const user = this.service.user
    if(user.loggedIn && user){
      if(state.url === '/home')
        return true
      else{
        this.route.navigate(['/home'])
        return false
      }
    }
    else{
      if(state.url === '/register' || state.url === '/'){
        return true;
      }
      this.route.navigate(['/'])
      return false
    }
  }

}
