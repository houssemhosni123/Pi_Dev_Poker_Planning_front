import { Injectable } from '@angular/core';
import { Client } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Observable, Subject } from 'rxjs';
//import { Chat } from 'app/Model/chat';

@Injectable({
  providedIn: 'root'
})
export class chatStartedservice {
  private stompClient: Client;
 
  private chatStartedSubject: Subject<void> = new Subject<void>();
  constructor() {
    const socket = new SockJS('http://localhost:8089/ws'); // Remplacez l'URL par l'URL de votre serveur WebSocket
    this.stompClient = new Client();
    this.stompClient.webSocketFactory = () => socket;
    this.stompClient.onConnect = (frame) => {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/topic/startchat', (message) => {
        const chatStarted: string = message.body;
        this.chatStartedSubject.next();
      });
    };
    this.stompClient.onDisconnect = (frame) => {
      console.log('Disconnected: ' + frame);
    };
    this.stompClient.activate();
  }

 
    public startChat(): void {
    // Envoyer un message au serveur pour démarrer le chat
    this.stompClient.publish({ destination: '/app/startChat', body: '' });
  }
  public getChatStarted(): Observable<void> {
    return this.chatStartedSubject.asObservable();
  }
}
