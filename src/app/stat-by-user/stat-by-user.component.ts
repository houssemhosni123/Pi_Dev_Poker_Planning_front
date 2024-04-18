import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'app/Services/gestionReclamationServices/ReclamationServices';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-stat-by-user',
  templateUrl: './stat-by-user.component.html',
  styleUrls: ['./stat-by-user.component.scss']
})
export class StatByUserComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // ...other options
  };
  public barChartLabels: string[] = []; // For user names
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: any[] = [
    { data: [], label: 'Reclamations', backgroundColor: [] }
  ];

  constructor(private service: ReclamationService) {}

  ngOnInit() {
    this.service.getReclamationCountByUser().subscribe(
      statisticsMap => {
        const users = Object.keys(statisticsMap);
        const reclamations = Object.values(statisticsMap);

        this.barChartLabels = users;
        this.barChartData[0].data = reclamations.map(reclamationCount => +reclamationCount);

        // Generate a random color for each user
        this.barChartData[0].backgroundColor = users.map(() => this.getRandomColor());
      },
      error => {
        console.error('Error fetching data: ', error);
      }
    );
  }

  // Function to generate a random color
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}