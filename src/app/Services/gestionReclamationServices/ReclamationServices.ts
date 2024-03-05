import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Reclam } from "app/main/gestionReclamation/ajouter-reclamation/modelReclamtion";
import { EventReff } from "app/main/gestionReunion/ajouter-reunion/model";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
  })
  export class ReclamationService {
    private api = 'http://localhost:8081/sprr'; // Your backend base URL}
    public clientForm:  FormGroup; 
    constructor(private http: HttpClient) { }  
    postNewReclamation(reclamation: Reclam, titreReunion: string): Observable<any> {
      const url = `${this.api}/add/${titreReunion}`;
      return this.http.post(url, reclamation);
    }
  
    getTitresReunion(): Observable<string[]> {
      const url = `${this.api}/het`;
      return this.http.get<string[]>(url);
   
    }
    getAllReclamation(): Observable<Reclam[]> {
      return this.http.get<Reclam[]>(`${this.api}/affichage`);
    }
      deleteReclamation(id: number): Observable<void> {
        return this.http.delete<void>(`${this.api}/delreclamation/${id}`);
      }
      getReclamationCountByReunion(): Observable<any[]> {
        return this.http.get<any[]>(`${this.api}/countByReunion`);
      }
  }
  
    
