import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Userstory } from "Models/userstory.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserStoryService {
  private apiUrl = "http://localhost:8081/pokerplanning/userstory";

  constructor(private httpClient: HttpClient) {}

  getUserStorys(): Observable<Userstory[]> {
    return this.httpClient.get<Userstory[]>(`${this.apiUrl}/getUserStory`);
  }
  getUserStoryById(id: number): Observable<Userstory> {
    return this.httpClient.get<Userstory>(`${this.apiUrl}/getUserStorys/${id}`);
  }

  updateUserStory(
    idUserStory: number,
    userstory: Userstory
  ): Observable<Userstory> {
    return this.httpClient.put<Userstory>(
      `${this.apiUrl}/updateUserStory/${idUserStory}`,
      userstory
    );
  }

  deleteUserStory(id: number): Observable<void> {
    const url = `${this.apiUrl}/deleteUserStory/${id}`;
    return this.httpClient.delete<void>(url);
  }
  getProjetDetailsForUserStory(idUserStory: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/projet/${idUserStory}`);
  }
  search(text: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/search?text=${text}`);
  }
}
