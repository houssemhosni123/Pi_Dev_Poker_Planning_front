import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwilioService {

  private apiUrl = 'http://localhost:8080/api/sms/send'; 

  constructor(private http: HttpClient) { }

  sendSms(to: string, message: string): Observable<any> {
    const params = { to, message };
    return this.http.post(this.apiUrl, params);
  }
}
