import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'app/Services/survey.service';
import { colors } from 'app/colors.const';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {
  public contentHeader: object;
  public radioModel = 1;
  private primaryColorShade = '#836AF9';
  private yellowColor = '#ffe800';
  private successColorShade = '#28dac6';
  private warningColorShade = '#ffe802';
  private warningLightColor = '#FDAC34';
  private infoColorShade = '#299AFF';
  private greyColor = '#4F5D70';
  private blueColor = '#2c9aff';
  private blueLightColor = '#84D0FF';
  private greyLightColor = '#EDF1F4';
  private tooltipShadow = 'rgba(0, 0, 0, 0.25)';
  private lineChartPrimary = '#666ee8';
  private lineChartDanger = '#ff4961';
  private labelColor = '#6e6b7b';
  private grid_line_color = 'rgba(200, 200, 200, 0.2)'; // RGBA color helps in dark layout

  constructor(private surveyService :SurveyService) { }

  ngOnInit(): void {
    this.surveyService.getSurveyResponsesCount().subscribe(response => {
      this.doughnutChart.datasets[0].data = [
        response["TresBien"],
        response["Bien"],
        response["Mauvais"],
        response["TropMauvais"]
      ];
    });
  }
  // scatter Chart
  public scatterChart = {
    chartType: 'scatter',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 800,
      title: {
        display: false,
        text: 'Chart.js Scatter Chart'
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: this.tooltipShadow,
        backgroundColor: colors.solid.white,
        titleFontColor: colors.solid.black,
        bodyFontColor: colors.solid.black
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: this.grid_line_color,
              zeroLineColor: this.grid_line_color
            },
            ticks: {
              stepSize: 10,
              min: 0,
              max: 140
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              color: this.grid_line_color,
              zeroLineColor: this.grid_line_color
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400
            }
          }
        ]
      },
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 9
        }
      }
    },

    datasets: [
      {
        label: 'iPhone',
        data: [
          {
            x: 72,
            y: 225
          },
          {
            x: 81,
            y: 270
          },
          {
            x: 90,
            y: 230
          },
          {
            x: 103,
            y: 305
          },
          {
            x: 103,
            y: 245
          },
          {
            x: 108,
            y: 275
          },
          {
            x: 110,
            y: 290
          },
          {
            x: 111,
            y: 315
          },
          {
            x: 109,
            y: 350
          },
          {
            x: 116,
            y: 340
          },
          {
            x: 113,
            y: 260
          },
          {
            x: 117,
            y: 275
          },
          {
            x: 117,
            y: 295
          },
          {
            x: 126,
            y: 280
          },
          {
            x: 127,
            y: 340
          },
          {
            x: 133,
            y: 330
          }
        ],
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: colors.solid.primary,
        pointHoverBackgroundColor: colors.solid.primary,
        pointHoverBorderColor: colors.solid.primary
      },
      {
        label: 'Samsung Note',
        data: [
          {
            x: 13,
            y: 95
          },
          {
            x: 22,
            y: 105
          },
          {
            x: 17,
            y: 115
          },
          {
            x: 19,
            y: 130
          },
          {
            x: 21,
            y: 125
          },
          {
            x: 35,
            y: 125
          },
          {
            x: 13,
            y: 155
          },
          {
            x: 21,
            y: 165
          },
          {
            x: 25,
            y: 155
          },
          {
            x: 18,
            y: 190
          },
          {
            x: 26,
            y: 180
          },
          {
            x: 43,
            y: 180
          },
          {
            x: 53,
            y: 202
          },
          {
            x: 61,
            y: 165
          },
          {
            x: 67,
            y: 225
          }
        ],
        pointBackgroundColor: this.yellowColor,
        borderColor: 'transparent',
        pointRadius: 5,
        pointHoverBackgroundColor: this.yellowColor,
        pointHoverBorderColor: this.yellowColor
      },
      {
        label: 'OnePlus',
        data: [
          {
            x: 70,
            y: 195
          },
          {
            x: 72,
            y: 270
          },
          {
            x: 98,
            y: 255
          },
          {
            x: 100,
            y: 215
          },
          {
            x: 87,
            y: 240
          },
          {
            x: 94,
            y: 280
          },
          {
            x: 99,
            y: 300
          },
          {
            x: 102,
            y: 290
          },
          {
            x: 110,
            y: 275
          },
          {
            x: 111,
            y: 250
          },
          {
            x: 94,
            y: 280
          },
          {
            x: 92,
            y: 340
          },
          {
            x: 100,
            y: 335
          },
          {
            x: 108,
            y: 330
          }
        ],
        pointBackgroundColor: this.successColorShade,
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHoverBackgroundColor: this.successColorShade,
        pointHoverBorderColor: this.successColorShade
      }
    ]
  };

  // public doughnutChart = {
  //   chartType: 'doughnut',
  //   options: {
  //     responsive: false,
  //     responsiveAnimationDuration: 500,
  //     cutoutPercentage: 60,
  //     aspectRatio: 1.4,
  //     legend: { display: false },
  //     tooltips: {
  //       callbacks: {
  //         label: function (tooltipItem, data) {
  //           var label = data.datasets[0].labels[tooltipItem.index] || '',
  //             value = data.datasets[0].data[tooltipItem.index];
  //           var output = ' ' + label + ' : ' + value + ' %';
  //           return output;
  //         }
  //       },
  //       // Updated default tooltip UI
  //       shadowOffsetX: 1,
  //       shadowOffsetY: 1,
  //       shadowBlur: 8,
  //       shadowColor: this.tooltipShadow,
  //       backgroundColor: colors.solid.white,
  //       titleFontColor: colors.solid.black,
  //       bodyFontColor: colors.solid.black
  //     }
  //   },

  //   datasets: [
  //     {
  //       labels: ['Tablet', 'Mobile', 'Desktop'],
  //       data: [10, 10, 80],
  //       backgroundColor: [this.successColorShade, this.warningLightColor, colors.solid.primary],
  //       borderWidth: 0,
  //       pointStyle: 'rectRounded'
  //     }
  //   ]
  // };
  // public doughnutChart = {
  //   chartType: 'doughnut',
  //   options: {
  //     responsive: false,
  //     responsiveAnimationDuration: 500,
  //     cutoutPercentage: 60,
  //     aspectRatio: 1.4,
  //     legend: { display: false },
  //     tooltips: {
  //       callbacks: {
  //         label: function (tooltipItem, data) {
  //           var label = data.labels[tooltipItem.index] || '';
  //           var value = data.datasets[0].data[tooltipItem.index];
  //           var total = data.datasets[0].data.reduce((a, b) => a + b, 0);
  //           var percentage = Math.round((value / total) * 100);
  //           var output = label + ' : ' + percentage + '%';
  //           return output;
  //         }
  //       },
  //       shadowOffsetX: 1,
  //       shadowOffsetY: 1,
  //       shadowBlur: 8,
  //       shadowColor: this.tooltipShadow,
  //       backgroundColor: colors.solid.white,
  //       titleFontColor: colors.solid.black,
  //       bodyFontColor: colors.solid.black
  //     }
  //   },
  
  //   datasets: [
  //     {
  //       labels: ['TresBien', 'Bien', 'Mauvais', 'TropMauvais'],
  //       data: [],
  //       backgroundColor: [this.successColorShade, this.warningLightColor, colors.solid.primary],
  //       borderWidth: 0,
  //       pointStyle: 'rectRounded'
  //     }
  //   ],
    
  // };
  public doughnutChart = {
    chartType: 'doughnut',
    options: {
      responsive: false,
      responsiveAnimationDuration: 500,
      cutoutPercentage: 60,
      aspectRatio: 1.4,
      legend: { display: false },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            var label = data.labels[tooltipItem.index] || '';
            var value = data.datasets[0].data[tooltipItem.index];
            var total = data.datasets[0].data.reduce((a, b) => a + b, 0);
            var percentage = Math.round((value / total) * 100);
            var output = label + ' : ' + percentage + '%';
            return output;
          }
        },
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        backgroundColor: 'white',
        titleFontColor: 'black',
        bodyFontColor: 'black'
      }
    },
    datasets: [
      {
        labels: ['TresBien', 'Bien', 'Mauvais', 'TropMauvais'],
        data: [0, 0, 0, 0], // Initial values, will be updated in ngOnInit
        backgroundColor: ['green', 'blue', 'red', 'orange'],
        borderWidth: 0,
        pointStyle: 'rectRounded'
      }
    ]
  };
  public plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20;
        };
      }
    }
  ];

}
