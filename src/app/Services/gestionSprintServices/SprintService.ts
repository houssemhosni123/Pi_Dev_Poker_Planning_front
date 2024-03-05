// sprint.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sprint } from '../../main/apps/model/sprint';

@Injectable({
  providedIn: 'root',
})
export class SprintService {
  private apiUrl = 'http://localhost:8082/SpringMVC/api/sprints';

  constructor(private http: HttpClient) {}

  getAllSprints(): Observable<Sprint[]> {
    return this.http.get<Sprint[]>(this.apiUrl);
  }

  getSprintById(id: number): Observable<Sprint> {
    return this.http.get<Sprint>(`${this.apiUrl}/${id}`);
  }

  createSprint(sprint: Sprint): Observable<Sprint> {
    return this.http.post<Sprint>(this.apiUrl, sprint);
  }

  updateSprint(id: number, sprint: Sprint): Observable<Sprint> {
    return this.http.put<Sprint>(`${this.apiUrl}/${id}`, sprint);
  }

  deleteSprint(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getSprintProgression(sprintId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/${sprintId}/progression`);
   
  }
}
