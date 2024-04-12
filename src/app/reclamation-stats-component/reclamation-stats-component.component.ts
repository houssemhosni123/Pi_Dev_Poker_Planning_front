import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ReclamationService } from 'app/Services/gestionReclamationServices/ReclamationServices';
import 'chart.js';

declare var Chart: any;

@Component({
  selector: 'app-reclamation-stats-component',
  templateUrl: './reclamation-stats-component.component.html',
  styleUrls: ['./reclamation-stats-component.component.scss']
})
export class ReclamationStatsComponent implements OnInit, AfterViewInit  {

  chartData: any;
  constructor(private reclamationService: ReclamationService) { }
  ngOnInit(): void {
    this.reclamationService.getReclamationCountByReunion().subscribe(
        (data: any[]) => {
            this.chartData = {
                labels: data.map(item => item[0]),
                datasets: [{
                    label: 'Nombre de réclamations par réunion',
                    data: data.map(item => item[1])
                }]
            };
            this.createChart(); // Appelez createChart() après avoir récupéré les données
        },
        (error) => {
            console.error('Erreur lors de la récupération des données du service countByReunion:', error);
        }
    );
}


  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const ctx = document.getElementById('reclamationChart');
    new Chart(ctx, {
      type: 'bar',
      data: this.chartData,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
