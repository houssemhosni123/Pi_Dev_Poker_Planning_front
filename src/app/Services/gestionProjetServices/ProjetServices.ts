import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Projet } from "Models/projet.model";
import { ProjetPartial } from "Models/projetpartial.model";
import { Projet1 } from "app/auth/models/Projet";
import { ProjetModule } from "app/main/gestionProjet/Projet.module";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class ProjetService {
    private apiUrl = 'http://localhost:8080/Projet';
    
  constructor(private httpClient: HttpClient) {}

  getProjets(): Observable<Projet[]> {
    return this.httpClient.get<Projet[]>(`${this.apiUrl}/getprojet`);
}
getProjets1(): Observable<Projet1[]> {
  return this.httpClient.get<Projet1[]>(`${this.apiUrl}/getprojet`);
}

getProjetById(id: number): Observable<Projet> {
  return this.httpClient.get<Projet>(`${this.apiUrl}/getprojets/${id}`);
}

createProjet(projet: Projet): Observable<Projet> {
  return this.httpClient.post<Projet>(`${this.apiUrl}/createprojet`, projet);
}

updateProjet(idProjet: number, projet: Projet): Observable<Projet> {
  return this.httpClient.put<Projet>(`${this.apiUrl}/updateprojet/${idProjet}`, projet);
}

deleteProjet(idProjet: number): Observable<any> {
  return this.httpClient.delete(`${this.apiUrl}/deleteprojet/${idProjet}`);
}
}