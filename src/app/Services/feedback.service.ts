import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from 'app/ModelGestionFeedback/Feedback';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiServerUrl = environment.apiUrl2; 

  constructor(private http : HttpClient) { }
  public getAllFeedbacks(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/feedback/getall`);
  }
  public deleteFeedbackById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/feedback/delete/${id}`);
  }
  public getFeedbackById(id: number): Observable<Feedback> {
    return this.http.get<Feedback>(`${this.apiServerUrl}/feedback/get/${id}`);
  }
public createFeedBack(feed: any): Observable<any> {
  return this.http.post(`${this.apiServerUrl}/feedback/create`, feed);
}

  public calculateAverageEvaluationBySessionId(sessionid:any): Observable<number> {
    return this.http.get<number>(`${this.apiServerUrl}/feedback/sessions/${sessionid}/average-feedback`);
  }
 
  
}
