import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Projet } from "Models/projet.model";
import { ProjetModule } from "app/main/gestionProjet/Projet.module";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class ProjetService {
    private apiUrl = 'http://localhost:8081/pokerplanning/Projet';
    
  constructor(private httpClient: HttpClient) {}

  getProjets(): Observable<Projet[]> {
    return this.httpClient.get<Projet[]>(`${this.apiUrl}/getprojet`);
}

getProjetById(id: number): Observable<Projet> {
  return this.httpClient.get<Projet>(`${this.apiUrl}/getprojets/${id}`);
}

createProjet(projet: Projet): Observable<Projet> {
  return this.httpClient.post<Projet>(`${this.apiUrl}/createprojet`, projet);
}

updateProjet(id: number, projet: Projet): Observable<Projet> {
  return this.httpClient.put<Projet>(`${this.apiUrl}/updateprojet/${id}`, projet);
}

deleteProjet(id: number): Observable<void> {
  return this.httpClient.delete<void>(`${this.apiUrl}/deleteprojet/${id}`);
}
}