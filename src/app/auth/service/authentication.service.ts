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
  

 
get idUser(){

    return this.currentUser && this.currentUserSubject.value.idUser;
    
}
  /**
   *  Confirms if user is admin
   */
  get isAdmin() {

    console.log( this.currentUserSubject.value.rolee);
    return this.currentUser && this.currentUserSubject.value.rolee=== Role.Admin;
    
  }
  
  /**
   *  Confirms if user is ProductOwner
   */
  get isProductOwner() {
    

    return this.currentUser && this.currentUserSubject.value.rolee=== Role.ProductOwner;
  }
  /**
   *  Confirms if user is ScrumMaster
   */
  get isScrumMaster() {
    return this.currentUser && this.currentUserSubject.value.rolee=== Role.ScrumMaster;
  }
  /**
   *  Confirms if user developer
   */
  get isdeveloper() {
    return this.currentUser && this.currentUserSubject.value.rolee === Role.Developer;
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
              // If user status is inactive, handle accordingly
              console.error('Your account is not active. Please contact the administrator.');
              throw new Error('Your account is not active. Please contact the administrator.');
            }
  
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            console.log(user);
  
            setTimeout(() => {
              this._toastrService.success(
                'You have successfully logged in as an ' + user.rolee + ' user to Vuexy. Now you can start to explore. Enjoy! 🎉',
                '👋 Welcome, ' + user.nom + '!',
                { toastClass: 'toast ngx-toastr', closeButton: true }
              );
            }, 2500);
          } else {
            // If user is null or token is missing, handle the error or unexpected response
            // You can throw an error, show a notification, or log a message here
            console.error('Unexpected response from login API:', user);
          }
  
          return user;
        }),
        catchError(error => {
          // Handle HTTP errors here
          // You can throw an error, show a notification, or log a message here
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