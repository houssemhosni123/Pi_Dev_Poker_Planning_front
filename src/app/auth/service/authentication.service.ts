import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { User, Role } from 'app/auth/models';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {


  //public
  public currentUser: Observable<User>;

  //private
  private currentUserSubject: BehaviorSubject<User>;

  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  constructor(private _http: HttpClient, private _toastrService: ToastrService) {
    
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

    this.currentUser = this.currentUserSubject.asObservable();
  }

  // getter: currentUserValue
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  
   // Public method to get the current user's role
   public getCurrentUserRole(): Role {
    // Your implementation to get the current user's role
    // For example:
    const currentUser = this.currentUserSubject.value;
    return currentUser.rolee;
  }
 
get idUser(){

    return this.currentUser && this.currentUserSubject.value.idUser;
    
}
  /**
   *  Confirms if user is admin
   */
  get isAdmin() {
    return this.currentUser && this.currentUserSubject.value && this.currentUserSubject.value.rolee === Role.Admin;
}

get isProductOwner() {
    return this.currentUser && this.currentUserSubject.value && this.currentUserSubject.value.rolee === Role.ProductOwner;
}

get isScrumMaster() {
    return this.currentUser && this.currentUserSubject.value && this.currentUserSubject.value.rolee === Role.ScrumMaster;
}

get isDeveloper() {
    return this.currentUser && this.currentUserSubject.value && this.currentUserSubject.value.rolee === Role.developer;
}



  /**
   * User login
   *
   * @param email
   * @param password
   * @returns user
   */

  login(email: string, password: string) {
    return this._http
      .post<any>(`${environment.apiUrl}/authenticate`, { email, password })
      .pipe(
        map(user => {
          if (user) {
            if (user.status === 'inactive') {
              console.error('Your account is not active. Please contact the administrator.');
              throw new Error('Your account is not active. Please contact the administrator.');
            }

            localStorage.setItem('currentUser', JSON.stringify(user));
            // Update the code to handle the user object accordingly
            console.log(user);

            setTimeout(() => {
              // Update toastr message if needed
            }, 2500);
          } else {
            console.error('Unexpected response from login API:', user);
          }

          return user;
        }),
        catchError(error => {
          console.error('Login failed:', error);
          return throwError(error);
        })
      );
  }
  
  

  /**
   * User logout
   *
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // notify
    this.currentUserSubject.next(null);
  }
}