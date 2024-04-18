import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Projet1 } from "app/auth/models/Projet";

import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class ProjetService {
    private apiUrl = 'http://localhost:8080/Projet';
    
  constructor(private httpClient: HttpClient) {}

 
getProjets1(): Observable<Projet1[]> {
  return this.httpClient.get<Projet1[]>(`${this.apiUrl}/getprojet`);
}


}