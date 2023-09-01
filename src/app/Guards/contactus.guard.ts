import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactusGuard implements CanActivate {
  constructor(public r:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
      if(!localStorage.getItem("email")){
        this.r.navigate(['/contactus'])
        localStorage.clear()
       //return false;
      }
      else{
        return true;
      }
    
  }
  
}

