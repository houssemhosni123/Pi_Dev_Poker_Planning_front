// tache.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoleProjet, Tache } from 'app/auth/models/TacheProjet';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private baseUrl = 'http://localhost:8080/Tache';

  constructor(private http: HttpClient) { }

  // Method to add a new task
  addTache(tache: Tache): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/ajouterTache`, tache);
  }


 
  

  calculateRemainingDays(id: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/calculateRemainingDays/${id}`);
  }
  // Method to get all tasks
  getAllTaches(): Observable<Tache[]> {
    return this.http.get<Tache[]>(`${this.baseUrl}/GetTache/`);
  }
  getTachesByUserId(userId: number): Observable<any[]> {
    return this.
    http.get<any[]>(`${this.baseUrl}/byUser/${userId}`);
  }
  getTacheById(id: number) {
    return this.http.get<Tache>(`${this.baseUrl}/GetTache/${id}`);
  }
  // Method to update a task
  updateTache(id: number, tache: Tache): Observable<Tache> {
    return this.http.put<Tache>(`${this.baseUrl}/Updatetache/${id}`, tache);
  }

  // Method to delete a task
  deleteTache(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/Deletetache/${id}`);
  }
}
