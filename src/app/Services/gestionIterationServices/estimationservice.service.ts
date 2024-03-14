import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estimation } from 'app/Model/estimation';
import { AuthenticationService } from 'app/auth/service';

@Injectable({
  providedIn: 'root'
})
export class EstimationserviceService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addEstimation(estimation: Estimation, userId: number): Observable<Estimation> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    // Extract token from user object
    const token = currentUser.token;
    
    // Add JWT token to the request headers
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    // Send the estimation data along with the user ID to the backend
    return this.http.post<Estimation>(`${this.apiUrl}/Estimation/AddEstimation?userId=${userId}`, estimation, { headers });
  }
  getEstimationsByIdIteration(id: number): Observable<Estimation[]> {
    const url = `${this.apiUrl}/Estimation/GetEstimations/${id}`;
    return this.http.get<Estimation[]>(url);
  }
  AddEstimationWithIteration(estimation: Estimation, userId: number): Observable<Estimation> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    // Extract token from user object
    const token = currentUser.token;
    
    // Add JWT token to the request headers
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Estimation>(`${this.apiUrl}/Estimation/AddEstimationWithIteration/?userId=${userId}`, estimation,{ headers });
    
  }
  ShowEstimationForLastIteration(): Observable<Estimation[]> {
    const url = `${this.apiUrl}/Estimation/GetEstimationsLastIteration/`;
    return this.http.get<Estimation[]>(url);
  }
}
