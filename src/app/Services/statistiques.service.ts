import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { KpiData } from "Models/kpiData.model";
import { UsData } from "Models/usData.model";
import { VelocityData } from "Models/velocityData.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StatistiquesService {
  private apiUrl = "http://localhost:8081/pokerplanning/kpi";

  constructor(private httpClient: HttpClient) {}

  getVeclocityData(): Observable<VelocityData[]> {
    return this.httpClient.get<VelocityData[]>(`${this.apiUrl}/velocity`);
  }

  getUsData(): Observable<UsData[]> {
    return this.httpClient.get<UsData[]>(`${this.apiUrl}/us`);
  }

  getKpi(): Observable<KpiData[]> {
    return this.httpClient.get<KpiData[]>(`${this.apiUrl}`);
  }
}
