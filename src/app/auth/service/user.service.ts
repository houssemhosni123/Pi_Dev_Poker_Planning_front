import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { environment } from 'environments/environment';
import { User } from 'app/auth/models';
import { Observable } from 'rxjs';
import { RegisterRequest } from 'app/main/gestionUser/Responses/RegisterRequest';
import { AuthenticationResponse } from 'app/main/gestionUser/Responses/AuthenticationResponse';
import { ChangePasswordRequest } from 'app/main/gestionUser/Requests/ChangePasswordRequest';

@Injectable({ providedIn: 'root' })
export class UserService {
  private baseUrl1 = 'http://localhost:8089/api/v1/auth';

  /**
   *
   * @param {HttpClient} _http
   */
  constructor(private _http: HttpClient) {}

  /**
   * Get all users
   */
  getUserById(id: number) {
    return this._http.get<User>(`${environment.apiUrl1}/User/GetUser/${id}`);
  }
  getAll() {
    return this._http.get<User[]>(`${environment.apiUrl1}/User/GetUsers/`);
  }
  uploadPhoto(id: any, file: File): Observable<any> {
    const uploadUrl = `${environment.apiUrl1}/User/upload/${id}`;

    const formData: FormData = new FormData();
    formData.append('photo', file, file.name);

    return this._http.post(uploadUrl, formData);
  }
  downloadFile(fileName: string): Observable<Blob> {
    const url = `${environment.apiUrl1}/download/${fileName}`;
    return this._http.get(url, { responseType: 'blob' });
  }

  getPhoto(photo: string): string{
    const photoUrl = `${environment.apiUrl1}/download/${photo}`;

    return `${environment.apiUrl1}/download/${photo}`;
  }
  /**
   * Get user by id
   */
  


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

  getScrumMasterCount(): Observable<number> {
    return this._http.get<number>(`${environment.apiUrl1}/User/scrum-masters`);
  }

  getDeveloperCount(): Observable<number> {
    return this._http.get<number>(`${environment.apiUrl1}/User/developers`);
  }

  getProductOwnerCount(): Observable<number> {
    return this._http.get<number>(`${environment.apiUrl1}/User/product-owners`);

  }
  countActiveUsers(): Observable<number> {
    return this._http.get<number>(`${environment.apiUrl1}/User/active-users`);

  }

  countInactiveUsers(): Observable<number> {
    return this._http.get<number>(`${environment.apiUrl1}/User/inactive-users`);

  }

  changePassword(request: ChangePasswordRequest): Observable<any> {
    // Get user object from local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    // Extract token from user object
    const token = currentUser.token;
    
    // Add JWT token to the request headers
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the JWT token in the headers
    return this._http.patch<any>(`${environment.apiUrl1}/User/change-password`, request, { headers });
}
resetPassword(email: string): Observable<void> {
  return this._http.post<void>(`${environment.apiUrl1}/User/reset-password`, { email });
}
}
 
