import { Component, OnInit } from "@angular/core";
import { KpiData } from "Models/kpiData.model";
import { UsData } from "Models/usData.model";
import { VelocityData } from "Models/velocityData.model";
import { StatistiquesService } from "app/Services/statistiques.service";
import { colors } from "app/colors.const";

@Component({
  selector: "app-statistiques",
  templateUrl: "./statistiques.component.html",
  styleUrls: ["./statistiques.component.scss"],
})
export class StatistiquesComponent implements OnInit {
  constructor(private dataService: StatistiquesService) {}
  velocityData: VelocityData[] = [];
  usData: UsData[] = [];
  kpiData: KpiData[] = [];
  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getKpi().subscribe(
      (data: KpiData[]) => {
        this.kpiData = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadVeclocityData(): void {
    this.dataService.getVeclocityData().subscribe(
      (data: VelocityData[]) => {
        this.velocityData = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadUsData(): void {
    this.dataService.getUsData().subscribe(
      (data: UsData[]) => {
        this.usData = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
