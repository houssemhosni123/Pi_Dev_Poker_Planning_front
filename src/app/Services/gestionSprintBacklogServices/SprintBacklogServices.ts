// sprint.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SprintBacklog } from '../../main/apps/model/sprintBacklog'; // Assurez-vous d'importer correctement votre modèle
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SprintBacklogService  {
  private apiUrl = 'http://localhost:8082/SpringMVC/api/sprintBacklogs'; // Assurez-vous de mettre le bon chemin d'API

  constructor(private http: HttpClient) {}

  getAllSprintBacklogs(): Observable<SprintBacklog[]> {
    return this.http.get<SprintBacklog[]>(this.apiUrl);
  }

  getSprintBacklogById(id: number): Observable<SprintBacklog> {
    return this.http.get<SprintBacklog>(`${this.apiUrl}/${id}`);
  }

  createSprintBacklog(sprintBacklog: SprintBacklog): Observable<SprintBacklog> {
    return this.http.post<SprintBacklog>(this.apiUrl, sprintBacklog);
  }

  updateSprintBacklog(id: number, sprintBacklog: SprintBacklog): Observable<SprintBacklog> {
    return this.http.put<SprintBacklog>(`${this.apiUrl}/${id}`, sprintBacklog);
  }

  deleteSprintBacklog(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  assignSprintToSprintBacklog(sprintBacklogId: number, sprintId: number): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/${sprintBacklogId}/assign-sprint/${sprintId}`, {});
  }
  

  unassignSprintFromSprintBacklog(sprintBacklogId: number): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/${sprintBacklogId}/unassign-sprint`, {});
  }

  assignUserStoriesToSprintBacklog(sprintBacklogId: number, userStoryIds: number[]): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/${sprintBacklogId}/assign-userstories`, { userStoryIds });
  }

  unassignUserStoriesFromSprintBacklog(sprintBacklogId: number, userStoryIds: number[]): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/${sprintBacklogId}/unassign-userstories`, { userStoryIds });
  }
 // getSprintBacklogsBySprintId(sprintId: number): Observable<any[]> {
  //  return this.http.get<any[]>(`${this.apiUrl}/sprintBacklog/${sprintId}`);
  //}
  getSprintBacklogsBySprintId(sprintId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/sprintBacklog/${sprintId}`).pipe(
      tap(data => console.log('Service Response:', data)),
      catchError(error => {
        console.error('Service Error:', error);
        throw error;  // Rethrow the error for further handling
      })
    );
  }
  
}
