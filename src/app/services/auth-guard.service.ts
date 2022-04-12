import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().onAuthStateChanged(
          (user) => {
            if(user){
              resolve(true);
            }else{
              this.router.navigate(['/auth', 'signin']);
              resolve(false);
            }
          }
        );
      }
    );                   
  }
}
