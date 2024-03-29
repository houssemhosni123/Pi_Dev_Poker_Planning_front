// tache.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tache } from 'app/auth/models/TacheProjet';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private baseUrl = 'http://localhost:8080/Tache';

  constructor(private http: HttpClient) { }

  // Method to add a new task
  addTache(tache: Tache, idUser: any, idProjet: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/ajouterTache/${idUser}/${idProjet}`, tache);
  }

  // Method to get all tasks
  getAllTaches(): Observable<Tache[]> {
    return this.http.get<Tache[]>(`${this.baseUrl}/GetTache/`);
  }

  // Method to update a task
  updateTache(tache: Tache, id: number): Observable<Tache> {
    return this.http.put<Tache>(`${this.baseUrl}/Updatetache/${id}`, tache);
  }

  // Method to delete a task
  deleteTache(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/Deletetache/${id}`);
  }
}
