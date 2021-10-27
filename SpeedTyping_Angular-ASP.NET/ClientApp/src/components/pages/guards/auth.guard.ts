import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private user: UserService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.user.isAuthorized)
    {
      let roles = <string[]>route.data["permittedRoles"];
      let isAllRolesMatch = true;
      if(roles)
        isAllRolesMatch = this.user.isAllRolesMatch(roles);
      if(isAllRolesMatch)
        return true;
      else
      {
        this.router.navigateByUrl("");
        return false;
      }
    }
    this.router.navigateByUrl("/account/login");
    return false;
  }
}