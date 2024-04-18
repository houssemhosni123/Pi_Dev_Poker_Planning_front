import { Injectable } from '@angular/core';
import { Client } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Observable, Subject } from 'rxjs';
import { Chat } from 'app/Model/chat';

@Injectable({
  providedIn: 'root'
})
export class StartsocketService {
  private stompClient: Client;
  private messagesSubject: Subject<String> = new Subject<String>();
  private chatStartedSubject: Subject<void> = new Subject<void>();
  constructor() {
    const socket = new SockJS('http://localhost:8080/ws'); // Remplacez l'URL par l'URL de votre serveur WebSocket
    this.stompClient = new Client();
    this.stompClient.webSocketFactory = () => socket;
    this.stompClient.onConnect = (frame) => {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/topic/userstory', (message) => {
        const chatMessage: String = message.body;
        this.messagesSubject.next(chatMessage);
      });
    };
    this.stompClient.onDisconnect = (frame) => {
      console.log('Disconnected: ' + frame);
    };
    this.stompClient.activate();
  }

  public getUserStory(): Observable<String> {
    return this.messagesSubject.asObservable();
  }

  public sendUserStory(message: string ): void {
    this.stompClient.publish({ destination: '/app/userstory', body: message});
  }
 
}
