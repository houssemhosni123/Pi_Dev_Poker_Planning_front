import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { KpiData } from "app/main/Models/kpiData.model";
import { UsData } from "app/main/Models/usData.model";
import { VelocityData } from "app/main/Models/velocityData.model";

import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StatistiquesService {
  private apiUrl = "http://localhost:8080/kpi";

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
