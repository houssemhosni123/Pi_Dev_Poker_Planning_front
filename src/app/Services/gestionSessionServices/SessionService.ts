import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { addSession } from "app/main/gestionSession/model/addSession";
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from "rxjs";



@Injectable({
  providedIn:'root'  
})

export class sessionservice{
   private apiurl = 'http://localhost:8089/Session'
   private apiurl2 = 'http://localhost:8089/Projet'
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
    
    getListProject(): Observable<any>{
      return this.http.get<any>(this.apiurl2+'/getprojet')
    }

    deleteSession(idSession: any): Observable<any> {
      return this.http.delete(`${this.apiurl}/delete/${idSession}`);
    }

    updateSession(idSession:number, session:any):Observable<any>{
      return this.http.put(this.apiurl+ `/update/${idSession}`,session);
    }
    getSessionbyId(idSession:number): Observable<any>{
      return this.http.get(this.apiurl+`/get/${idSession}`)
    }
    getDev(): Observable<any> {
      return this.http.get(this.apiurl+'/getUser')
    }

    getUserStory(nom_Projet:string): Observable<any>{
      return this.http.get(`${this.apiurl}/userStories/${nom_Projet}`)
      
    }

    getUserForProject(nom_Projet:string){
      return this.http.get(this.apiurl+`/usersAndRoles/${nom_Projet}`)

    }

    sendEmail(emails: string[], idSession: number) {
      const url = `${this.apiurl}/send/${idSession}`;
     
      return this.http.post(url, { mails: emails });
    }

    validateSessionCode(idSession: number, code: string): Observable<string> {
      return this.http.get<string>(`${this.apiurl}/validate?idSession=${idSession}&code=${code}`);
    }




    

    
}