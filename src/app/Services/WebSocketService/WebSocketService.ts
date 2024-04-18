import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket('ws://localhost:8080/ws'); // WebSocket server URL
  }

  public sendMessage(message: string): void {
    this.socket$.next(message);
  }

  public onMessage(): Observable<any> {
    return this.socket$.asObservable();
  }
}
