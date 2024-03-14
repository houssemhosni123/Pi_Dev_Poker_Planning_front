import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estimation } from 'app/Model/estimation';
import { EstimationserviceService } from 'app/Services/gestionIterationServices/estimationservice.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { ChartType } from 'ng-apexcharts';
import { Label } from 'ng2-charts';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-estimation-show',
  templateUrl: './estimation-show.component.html',
  styleUrls: ['./estimation-show.component.scss']
})
export class EstimationShowComponent implements OnInit {

  estimations: Estimation[] = [];
  idIteration: number;
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  chart: Chart;

 
  constructor(private estimationService: EstimationserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  // this.generateChart();
    this.route.params.subscribe(params => {
      this.idIteration = +params['id'];

      // Use this.idIteration to fetch estimations
      this.estimationService.getEstimationsByIdIteration(this.idIteration)
        .subscribe(estimations => {
          this.estimations = estimations;
          this.generateChart();
        });
    });
  }
 ngOnDestroy(): void {
    // Ensure to destroy the chart to prevent memory leaks
    if (this.chart) {
      this.chart.destroy();
    }
  }

  generateChart(): void {
    const values = this.estimations.map(estimation => estimation.valeur);
    const uniqueValues = Array.from(new Set(values));

    // Calculate counts for each unique value
    const counts = uniqueValues.map(value =>
      values.filter(v => v === value).length
    );

    // Set labels and data for the pie chart
    const pieChartLabels = uniqueValues.map(value => value.toString());
    const pieChartData = counts;

    // Create or update the chart
    if (this.chart) {
      this.chart.data.labels = pieChartLabels;
      this.chart.data.datasets[0].data = pieChartData;
      this.chart.update();
    } else {
      const ctx = (document.getElementById('pieChart') as HTMLCanvasElement).getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: pieChartLabels,
          datasets: [{
            data: pieChartData,
            backgroundColor: this.getRandomColorsArray(pieChartData.length),
          }],
        },
      });
    }
  }

  getRandomColorsArray(count: number): string[] {
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(this.getRandomColor());
    }
    return colors;
  
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
  


