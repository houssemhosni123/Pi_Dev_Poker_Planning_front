import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Survey } from 'app/ModelGestionFeedback/Survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private apiUrl = environment.apiUrl2; // Update this with your actual backend URL

  constructor(private http: HttpClient) { }

  addSurvey(surveyRequest: any): Observable<Survey> {
    return this.http.post<Survey>(`${this.apiUrl}/survey/add`, surveyRequest);
  }

  getSurveyById(idsurvey: number): Observable<Survey> {
    return this.http.get<Survey>(`${this.apiUrl}/survey/get/${idsurvey}`);
  }

  updateSurvey(idsurvey: number, surveyRequest: any): Observable<Survey> {
    return this.http.put<Survey>(`${this.apiUrl}/survey/update/${idsurvey}`, surveyRequest);
  }

  deleteSurvey(idsurvey: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/survey/delete/${idsurvey}`);
  }

  getAllSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(`${this.apiUrl}/survey/getall`);
  }
  insertSurvey(body:any,idFeedback:any)
  {
    return this.http.post(`${this.apiUrl}/survey/responses/${idFeedback}`, body)

    
  }
  getSurveyResponsesCount()
    {
      return this.http.get<Survey[]>(`${this.apiUrl}/survey/count`);
      
    }
}
