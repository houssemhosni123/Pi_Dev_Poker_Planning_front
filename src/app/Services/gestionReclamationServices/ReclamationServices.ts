import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Reclam } from "app/main/gestionReclamation/ajouter-reclamation/modelReclamtion";
import { EventReff } from "app/main/gestionReunion/ajouter-reunion/model";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
  })
  export class ReclamationService {
    private api = 'http://localhost:8080'; // Your backend base URL}
    public clientForm:  FormGroup; 
    constructor(private http: HttpClient) { }  
    postNewReclamation(reclamation: Reclam, titreReunion: string, userId: number): Observable<any> {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
      // Extract token from user object
      const token = currentUser.token;
  
      // Add JWT token to the request headers
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
  
      // Construct the URL with query parameters
      const url = `${this.api}/add/${encodeURIComponent(titreReunion)}`;
  
      // Make the HTTP POST request with the URL, headers, and reclamation data
      return this.http.post(url, reclamation, { headers });
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
      updateReclamation(id: number, recl:Reclam ): Observable<Reclam> {
        return this.http.put<Reclam>(`${this.api}/update/${id}`,recl);
      }
      getReclamationById(id: number): Observable<Reclam> {
        return this.http.get<Reclam>(`${this.api}/getRec/${id}`);
      } 
      getReclamationCountByUser(): Observable<any[]> {
        return this.http.get<any[]>(`${this.api}/reclamations-par-utilisateur`);
      }
      
    }
  
    
