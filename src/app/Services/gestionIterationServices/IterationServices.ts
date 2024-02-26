import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iteration } from 'app/Model/iteration'; 
@Injectable({
  providedIn: 'root'
})
export class IterationService {

  private apiUrl = 'http://localhost:8089';
  constructor(private http: HttpClient) {}

  getIterations(): Observable<Iteration[]> {
    return this.http.get<Iteration[]>(`${this.apiUrl}/Iteration/GetIteration/`);
    }
    deleteIteration(iterationId: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/Iteration/DeleteIteration/${iterationId}`);
    }
}
