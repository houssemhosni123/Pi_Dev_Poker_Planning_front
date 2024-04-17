import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TacheTechnique } from '../../main/apps/model/tachTechnique';

@Injectable({
  providedIn: 'root',
})
export class TacheTechniqueService {
  private apiUrl = 'http://localhost:8082/SpringMVC/api/tacheTechniques';

  constructor(private http: HttpClient) {}

  createTacheTechnique(tacheTechnique: TacheTechnique): Observable<TacheTechnique> {
    return this.http.post<TacheTechnique>(`${this.apiUrl}/create`, tacheTechnique);
  }

  assignTacheTechniqueToUserStory(userStoryId: number, tacheTechnique: TacheTechnique): Observable<TacheTechnique> {
    return this.http.post<TacheTechnique>(`${this.apiUrl}/assignToUserStory/${userStoryId}`, tacheTechnique);
  }

  updateTacheTechnique(id: number, tacheTechnique: TacheTechnique): Observable<TacheTechnique> {
    return this.http.put<TacheTechnique>(`${this.apiUrl}/${id}`, tacheTechnique);
  }

  getAllTacheTechniques(): Observable<TacheTechnique[]> {
    return this.http.get<TacheTechnique[]>(`${this.apiUrl}`);
  }

  getTacheTechniqueById(id: number): Observable<TacheTechnique> {
    return this.http.get<TacheTechnique>(`${this.apiUrl}/${id}`);
  }

  deleteTacheTechnique(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  
  searchTachesTechniques(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/searchAdvanced?query=${query}`);
  }
}
