import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from 'app/ModelGestionFeedback/Question';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiServerUrl = environment.apiUrl2;

  constructor(private http: HttpClient) { }

  public getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiServerUrl}/questions/independant`);
  }

  public deleteQuestionById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/questions/delete/${id}`);
  }

  public getQuestionById(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.apiServerUrl}/questions/get/${id}`);
  }
  public addQuestion(question:any) {
    return this.http.post(`${this.apiServerUrl}/questions/add`,question);

  }
}
