import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Projet } from "app/main/Models/projet.model";

import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProjeteyaService {
  private apiUrl = "http://localhost:8080/Projet";

  constructor(private httpClient: HttpClient) {}

  getProjets(): Observable<Projet[]> {
    return this.httpClient.get<Projet[]>(`${this.apiUrl}/getprojet`);
  }

  exportExcel(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/export-excel`, {
      responseType: "blob",
    });
  }

  search(text: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/search?text=${text}`);
  }

  getProjetById(id: number): Observable<Projet> {
    return this.httpClient.get<Projet>(`${this.apiUrl}/getprojets/${id}`);
  }

  createProjet(projet: Projet): Observable<Projet> {
    return this.httpClient.post<Projet>(`${this.apiUrl}/createprojet`, projet);
  }

  updateProjet(idProjet: number, projet: Projet): Observable<Projet> {
    return this.httpClient.put<Projet>(
      `${this.apiUrl}/updateprojet/${idProjet}`,
      projet
    );
  }

  deleteProjet(idProjet: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/deleteprojet/${idProjet}`);
  }
}
