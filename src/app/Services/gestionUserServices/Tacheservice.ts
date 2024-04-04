import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class Tacheservice {
    private baseUrl = 'http://localhost:8081'; // Your backend base URL
  
  public clientForm:  FormGroup; 
  constructor(private http: HttpClient) { }
   // PUT
   addTache(tache: any, userId: number, projectId: number): Observable<any> {
    const url = `${this.baseUrl}/Tache/ajouterTache/${userId}/${projectId}`;
    return this.http.put<any>(url, tache);
  }

  /*
// POST
  createClient(data): Observable<any> {
    const headers = new HttpHeaders()
  .set('Authorization', 'Token ' + localStorage.getItem("userToken"));
    return this.http.post('http://127.0.0.1:8000/rest/client/', data ,{headers});
  }
// GET
  getClient(): Observable<any> {
    const headers = new HttpHeaders()
  .set('Authorization', 'Token ' + localStorage.getItem("userToken"));
    return this.http.get('http://127.0.0.1:8000/rest/client/' ,{headers});
  }
  
  // GET(id)
  getClientByID(id: number) {
    const headers = new HttpHeaders()
  .set('Authorization', 'Token ' + localStorage.getItem("userToken"));
    return this.http.get('http://127.0.0.1:8000/rest/client/'+id ,{headers});
  }
 
  
  
  deleteclient(id) {
    const headers = new HttpHeaders()
  .set('Authorization', 'Token ' + localStorage.getItem("userToken"));
    return this.http.delete('http://127.0.0.1:8000/rest/client/'+id ,{headers});
  }

  // GET(id)
  getClientByName(nom: string) {
    const headers = new HttpHeaders()
  .set('Authorization', 'Token ' + localStorage.getItem("userToken"));
    return this.http.get('http://127.0.0.1:8000/rest/clientBynom/'+nom ,{headers});
  }
 
}*/
}