import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Userstory } from "Models/userstory.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class UserStoryService {
    private apiUrl = 'http://localhost:8081/pokerplanning/userstory';

    constructor(private httpClient: HttpClient) {}

    getUserStorys(): Observable<Userstory[]> {
        return this.httpClient.get<Userstory[]>(`${this.apiUrl}/getUserStory`);
    }
  }