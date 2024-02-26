import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estimation } from 'app/Model/estimation';

@Injectable({
  providedIn: 'root'
})
export class EstimationserviceService {

  private apiUrl = 'http://localhost:8089/Estimation/AddEstimation';

  constructor(private http: HttpClient) { }

  addEstimation(estimation: Estimation): Observable<Estimation> {
    return this.http.post<Estimation>(`${this.apiUrl}`, estimation);
  }
}
