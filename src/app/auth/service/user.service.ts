import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';
import { User } from 'app/auth/models';
import { Observable } from 'rxjs';
import { RegisterRequest } from 'app/main/gestionUser/Responses/RegisterRequest';
import { AuthenticationResponse } from 'app/main/gestionUser/Responses/AuthenticationResponse';

@Injectable({ providedIn: 'root' })
export class UserService {
  private baseUrl1 = 'http://localhost:8081/api/v1/auth';

  /**
   *
   * @param {HttpClient} _http
   */
  constructor(private _http: HttpClient) {}

  /**
   * Get all users
   */
  getAll() {
    return this._http.get<User[]>(`${environment.apiUrl1}/User/GetUsers/`);
  }

  /**
   * Get user by id
   */
  getUserById(id: number) {
    return this._http.get<User>(`${environment.apiUrl1}/User/GetUser/${id}`);
  }


  updateUser(id: any, user: User): Observable<User> {
    return this._http.put<User>(`${environment.apiUrl1}/User/UpdateUser/${id}`, user);
  }

  register(registerRequest: RegisterRequest) {
    return this._http.post<AuthenticationResponse>
    (`${this.baseUrl1}/register`, registerRequest);
  }
 activateUser(userId: number): Observable<void> {
    return this._http.put<void>(`${environment.apiUrl1}/User/ActivateUser/${userId}`, null);
  }

  deactivateUser(userId: number): Observable<void> {
    return this._http.put<void>(`${environment.apiUrl1}/User/DeactivateUser/${userId}`, null);
  }
}
 
