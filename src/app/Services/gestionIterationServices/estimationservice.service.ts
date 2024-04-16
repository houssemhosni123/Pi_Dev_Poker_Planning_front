import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Estimation } from 'app/Model/estimation';
import { AuthenticationService } from 'app/auth/service';
import { Client, Stomp, StompSubscription } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class EstimationserviceService {

  private apiUrl = 'http://localhost:8089';
  private stompClient: Client;
  private estimationsSubject: Subject<Estimation> = new Subject<Estimation>();
  
  constructor(private http: HttpClient) {const socket = new SockJS('http://localhost:8089/ws'); // Remplacez l'URL par l'URL de votre serveur WebSocket
  this.stompClient = new Client();
  this.stompClient.webSocketFactory = () => socket;
  this.stompClient.onConnect = (frame) => {
    console.log('Connected: ' + frame);
    this.stompClient.subscribe('/topic/votes', (message) => {
      const estimation: Estimation = JSON.parse(message.body);
      this.estimationsSubject.next(estimation);
    });
  };
  this.stompClient.onDisconnect = (frame) => {
    console.log('Disconnected: ' + frame);
  };
this.stompClient.activate();}

  addEstimation(estimation: Estimation): Observable<Estimation> {
   
    // Send the estimation data along with the user ID to the backend
    return this.http.post<Estimation>(`${this.apiUrl}/Estimation/AddEstimation`, estimation);
  }
  getEstimationsByIdIteration(id: number): Observable<Estimation[]> {
    const url = `${this.apiUrl}/Estimation/GetEstimations/${id}`;
    return this.http.get<Estimation[]>(url);
  }
  AddEstimationWithIteration(estimation: Estimation, userId: number): Observable<Estimation> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    // Extract token from user object
    const token = currentUser.token;
    
    // Add JWT token to the request headers
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Estimation>(`${this.apiUrl}/Estimation/AddEstimationWithIteration/?userId=${userId}`, estimation,{ headers });
   // this.stompClient.publish({ destination: '/app/AddEstimationWithIteration/', body: JSON.stringify(estimation)});
  }
  
  ShowEstimationForLastIteration(): Observable<Estimation[]> {
    const url = `${this.apiUrl}/Estimation/GetEstimationsLastIteration/`;
    return this.http.get<Estimation[]>(url);
  }
  public getEstimations(): Observable<Estimation> {
    return this.estimationsSubject.asObservable();
  }
}
