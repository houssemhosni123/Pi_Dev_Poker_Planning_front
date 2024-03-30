import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { AuthenticationResponse } from 'app/main/gestionUser/Responses/AuthenticationResponse';
import { AuthenticationRequest } from 'app/main/gestionUser/Requests/AuthenticationRequest';
import { RegisterRequest } from 'app/main/gestionUser/Responses/RegisterRequest';
import { ToastrService } from 'ngx-toastr';
import { UserPoker } from 'app/main/gestionUser/Models/UserPoker';
import { RolePoker } from 'app/main/gestionUser/Models/RolePoker';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class Userservice {
  public currentUser: Observable<UserPoker>;

  //private
  private currentUserSubject: BehaviorSubject<UserPoker>;
    private baseUrl = 'http://localhost:8080'; // Your backend base URL
    private baseUrl1 = 'http://localhost:8080/api/v1/auth';
  
  public clientForm:  FormGroup; 
  constructor(private http: HttpClient ,private _toastrService: ToastrService) {

    this.currentUserSubject = new BehaviorSubject<UserPoker>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   // getter: currentUserValue
  public get currentUserValue(): UserPoker {
    return this.currentUserSubject.value;
  }
  

/**
   *  Confirms if user is admin
   */
get isAdmin() {
  return this.currentUser && this.currentUserSubject.value.role === RolePoker.Admin;
}

/**
 *  Confirms if user is ProductOwner
 */
get isProductOwner() {
  return this.currentUser && this.currentUserSubject.value.role === RolePoker.ProductOwner;
}
/**
 *  Confirms if user is ScrumMaster
 */
get isScrumMaster() {
  return this.currentUser && this.currentUserSubject.value.role === RolePoker.ScrumMaster;
}
/**
 *  Confirms if user developer
 */
get isdeveloper() {
  return this.currentUser && this.currentUserSubject.value.role === RolePoker.developer;
}
























  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/User/GetUsers/`);
  }
  
  /*register(request: RegisterRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl1}/register`, request);
  }
  authenticate(request: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl1}/authenticate`, request);
  }*/
  registerUser(registerRequest: RegisterRequest, imageFile: File): Observable<AuthenticationResponse> {
    const formData: FormData = new FormData();
    formData.append('request', JSON.stringify(registerRequest)); // Convert RegisterRequest to JSON string
    formData.append('imageFile', imageFile);

    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/register`, formData);
  }

  login(authRequest: AuthenticationRequest) {
    return this.http
      .post<any>(`${this.baseUrl1}/authenticate`, authRequest) // send authRequest directly
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));

            // Display welcome toast!
            setTimeout(() => {
              this._toastrService.success(
                'You have successfully logged in as an ' +
                  user.role +
                  ' user to Vuexy. Now you can start to explore. Enjoy! 🎉',
                '👋 Welcome, ' + user.Nom + '!',
                { toastClass: 'toast ngx-toastr', closeButton: true }
              );
            }, 2500);

            // notify
            this.currentUserSubject.next(user);
          }

          return user;
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


  /*login(
    authRequest: AuthenticationRequest
  ) {
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl1}/authenticate`, authRequest);
  }*/
  
}