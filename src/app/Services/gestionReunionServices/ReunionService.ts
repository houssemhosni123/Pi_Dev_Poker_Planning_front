import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { User } from "app/auth/models";
import { EventReff } from "app/main/gestionReunion/ajouter-reunion/model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class ReunionService {
    private api = 'http://localhost:8081/sprr'; // Your backend base URL}
    private url ="http://localhost:8081/sprr/users/reunion";

    public clientForm:  FormGroup; 
    constructor(private http: HttpClient) { }  
      /**
   * Add Event
   *
   // param eventForm
   */
 // addEvent(eventForm) {
   // const newEvent = new EventReff();
    // Initialiser les propriétés de l'événement avec les valeurs de eventForm
   // newEvent.titre_Reunion = eventForm.titre_Reunion;
    //newEvent.DateDebut_Reunion = eventForm.DateDebut_Reunion;
    //newEvent.DateFin_Reunion  = eventForm.DateFin_Reunion ;
     //   newEvent.calendar = eventForm.event.extendedProps.calendar;

    //newEvent.lieu_Reunion = eventForm.lieu_Reunion;
    //newEvent.priorite_Reunion = eventForm.priorite_Reunion;

    // Mettre à jour la propriété currentEvent avec le nouvel événement
    
  
    // Renvoyer une promesse résultant de l'appel de postNewEvent
    //return this.postNewEvent(newEvent);
  
    addUserToReunion(reunionData: any, userNames: string[]): Observable<any> {
      const url = `${this.api}/users/reunion?userNames=${userNames.join('&userNames=')}`;
      return this.http.post<any>(url, reunionData);
    }
    
    
  
  
  getAllEvent(): Observable<EventReff[]> {
    return this.http.get<EventReff[]>(`${this.api}/getAll`);

}
getReunionById(id: number): Observable<EventReff> {
  return this.http.get<EventReff>(`${this.api}/get/${id}`);
}

deleteSprint(id: number): Observable<void> {
  return this.http.delete<void>(`${this.api}/delete/${id}`);
}
updateReunion(id: number, eve: EventReff): Observable<EventReff> {
  return this.http.put<EventReff>(`${this.api}/update/${id}`,eve);
}
getAllUsers(): Observable<User[]> {
  return this.http.get<User[]>(`${this.api}/getusers`); 
}
getUsers(): Observable<string[]> {
  return this.http.get<string[]>(`${this.api}/getNomUser`);
}


}
  