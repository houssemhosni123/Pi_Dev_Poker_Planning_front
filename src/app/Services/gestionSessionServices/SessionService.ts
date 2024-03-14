import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { addSession } from "app/main/gestionSession/model/addSession";
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";



@Injectable({
  providedIn:'root'  
})

export class sessionservice{
   private apiurl = 'http://localhost:8080/Session'
    constructor(private http:HttpClient){
    }
    postSession(session:addSession):Observable<any>{
        return this.http.post<any>(this.apiurl+'/add',session)
    } 

    getAllSession(): Observable<any> {
      return this.http.get<any>(`${this.apiurl}/get`).pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
  
          if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `An error occurred: ${error.error.message}`;
          } else {
            // Server-side error
            errorMessage = `Backend returned code ${error.status}: ${error.error}`;
          }
  
          console.error(errorMessage);
          return throwError(errorMessage);
        })
      );
    
    }
    deleteSession(idSession: any): Observable<any> {
      return this.http.delete(`${this.apiurl}/delete/${idSession}`);
    }

    updateSession(idSession:number, session:any):Observable<any>{
      return this.http.put(this.apiurl+ `/update/${idSession}`,session);
    }
    getSessionbyId(idSession:number, session:any){
      return this.http.get(this.apiurl+`/get/${idSession}`,session)
    }
    getDev(): Observable<any> {
      return this.http.get(this.apiurl+'/getUser')
    }

    getUserStory(idProjet:number): Observable<any>{
      return this.http.get(`${this.apiurl}/${idProjet}/userStories`)
      
    }

    sendEmail(emails: string[]) {
      const idSession = 1; // Vous pouvez le modifier selon vos besoins
      const url = `${this.apiurl}/send/${idSession}`;
      return this.http.post(url, { mails: emails });
    }

    

    
}