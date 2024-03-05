import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { AuthenticationResponse } from 'app/main/gestionUser/Responses/AuthenticationResponse';
import { RegisterRequest } from 'app/main/gestionUser/Responses/responseRequest';
import { AuthenticationRequest } from 'app/main/gestionUser/Requests/AuthenticationRequest';



@Injectable({
  providedIn: 'root'
})
export class Userservice {
    private baseUrl = 'http://localhost:8081'; // Your backend base URL
    private baseUrl1 = 'http://localhost:8081/api/v1/auth';
  
  public clientForm:  FormGroup; 
  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/User/GetUsers/`);
  }
  
  register(request: RegisterRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl1}/register`, request);
  }
  authenticate(request: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl1}/authenticate`, request);
  }
  
}