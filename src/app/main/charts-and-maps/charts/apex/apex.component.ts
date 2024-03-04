import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UserService } from 'app/auth/service';
import { CoreConfigService } from '@core/services/config.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexStroke,
  ApexDataLabels,
  ApexXAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexPlotOptions,
  ApexYAxis,
  ApexFill,
  ApexMarkers,
  ApexTheme,
  ApexNonAxisChartSeries,
  ApexLegend,
  ApexResponsive,
  ApexStates
} from 'ng-apexcharts';
export interface ChartOptions2 {
  // Apex-non-axis-chart-series
  series?: ApexNonAxisChartSeries;
  chart?: ApexChart;
  stroke?: ApexStroke;
  tooltip?: ApexTooltip;
  dataLabels?: ApexDataLabels;
  fill?: ApexFill;
  colors?: string[];
  legend?: ApexLegend;
  labels?: any;
  plotOptions?: ApexPlotOptions;
  responsive?: ApexResponsive[];
  markers?: ApexMarkers[];
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis;
  states?: ApexStates;
}
@Component({
  selector: 'app-apex',
  templateUrl: './apex.component.html',
  styleUrls: ['./apex.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ApexComponent implements OnInit {
  public apexDonutChart: Partial<ChartOptions2>;
  public apexRadialChart1: Partial<ChartOptions2>;
  chartColors = {
    column: {
      series1: '#826af9',
      series2: '#d2b0ff',
      bg: '#f8d3ff'
    },
    success: {
      shade_100: '#7eefc7',
      shade_200: '#06774f'
    },
    donut: {
      series1: '#ffe700',
      series2: '#00d4bd',
      series3: '#826bf8',
      series4: '#2b9bf4',
      series5: '#FFA1A1'
    },
    area: {
      series3: '#a4f8cd',
      series2: '#60f2ca',
      series1: '#2bdac7'
    }
  };
  @ViewChild('apexLineAreaChartRef') apexLineAreaChartRef: any;
  @ViewChild('apexColumnChartRef') apexColumnChartRef: any;
  @ViewChild('apexScatterChartRef') apexScatterChartRef: any;
  @ViewChild('apexLineChartRef') apexLineChartRef: any;
  @ViewChild('apexBarChartRef') apexBarChartRef: any;
  @ViewChild('apexHeatmapChartRef') apexHeatmapChartRef: any;
  @ViewChild('apexDonutChartRef') apexDonutChartRef: any;
  @ViewChild('apexCandlestickChartRef') apexCandlestickChartRef: any;
  @ViewChild('apexRadarChartRef') apexRadarChartRef: any;
  @ViewChild('apexRadialChartRef') apexRadialChartRef: any;

  public contentHeader: object;
  public isMenuToggled = false;

  constructor(private _userService: UserService, private _coreConfigService: CoreConfigService) {}

  ngOnInit() {
    this.initializeCharts();
    this.loadStatistics();
    this.loadStatisticsActiveInactive();

    this.contentHeader = {
      headerTitle: 'Apex Charts',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Table',
            isLink: true,
            link: '/'
          },
          {
            name: 'Apex Charts',
            isLink: false
          }
        ]
      }
    };
  }

  initializeCharts() {
    // Apex Donut Chart
    this.apexDonutChart = {
      series: [],
      chart: {
        height: 350,
        type: 'donut'
      },
      colors: [
        this.chartColors.donut.series1,
        this.chartColors.donut.series2,
        this.chartColors.donut.series3,
        this.chartColors.donut.series5
      ],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
                fontFamily: 'Montserrat'
              },
              value: {
                fontSize: '1rem',
                fontFamily: 'Montserrat',
                formatter: function (val) {
                  return parseInt(val) + '%';
                }
              },
              total: {
                show: true,
                fontSize: '1.5rem',
                label: 'Operational',
                formatter: function (w) {
                  return '31%';
                }
              }
            }
          }
        }
      },
      legend: {
        show: true,
        position: 'bottom'
      },
      labels: ['Scrum Masters', 'Developers', 'Product Owners'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 300
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    };

    // Apex Radial Chart
    this.apexRadialChart1 = {
      series: [],
      labels: ['Active Users', 'Inactive Users'],
      chart: {
        height: 400,
        type: 'radialBar'
      },
      colors: ['#008FFB', '#FF4560'],
      plotOptions: {
        radialBar: {
          hollow: {
            size: '25%'
          },
          track: {
            margin: 15
          },
          dataLabels: {
            name: {
              fontSize: '1.5rem',
              fontFamily: 'Montserrat'
            },
            value: {
              fontSize: '1rem',
              fontFamily: 'Montserrat'
            },
            total: {
              show: true,
              fontSize: '1rem',
              label: 'Total',
              formatter: (w) => '100%'
            }
          }
        }
      },
      legend: {
        show: true,
        position: 'bottom'
      },
      stroke: {
        lineCap: 'round'
      }
    };
  }

  loadStatistics() {
    this._userService.getScrumMasterCount().subscribe(count => {
      this.apexDonutChart.series.push(count);
    });

    this._userService.getDeveloperCount().subscribe(count => {
      this.apexDonutChart.series.push(count);
    });

    this._userService.getProductOwnerCount().subscribe(count => {
      this.apexDonutChart.series.push(count);
    });

    this.apexDonutChart.labels = ['Scrum Masters', 'Developers', 'Product Owners'];

  }
  
  loadStatisticsActiveInactive() {
    this._userService.countActiveUsers().subscribe(activeCount => {
      this.apexDonutChart.series.push(activeCount);
      this.apexRadialChart1.series.push(activeCount);
    });
  
    this._userService.countInactiveUsers().subscribe(inactiveCount => {
      this.apexDonutChart.series.push(inactiveCount);
      this.apexRadialChart1.series.push(inactiveCount);
    });
  }
  
  ngAfterViewInit() {
    this._coreConfigService.getConfig().subscribe(config => {
      if (config.layout.menu.collapsed === true || config.layout.menu.collapsed === false) {
        setTimeout(() => {
          this.isMenuToggled = true;
          // Update the width of charts
          this.updateChartWidths();
        }, 900);
      }
    });
  }
  
  updateChartWidths() {
    this.apexLineAreaChartRef.chart.width = this.apexLineAreaChartRef?.nativeElement.offsetWidth;
    this.apexLineChartRef.chart.width = this.apexLineChartRef?.nativeElement.offsetWidth;
    this.apexColumnChartRef.chart.width = this.apexColumnChartRef?.nativeElement.offsetWidth;
    this.apexBarChartRef.chart.width = this.apexBarChartRef?.nativeElement.offsetWidth;
    this.apexScatterChartRef.chart.width = this.apexScatterChartRef?.nativeElement.offsetWidth;
    this.apexCandlestickChartRef.chart.width = this.apexCandlestickChartRef?.nativeElement.offsetWidth;
    this.apexHeatmapChartRef.chart.width = this.apexHeatmapChartRef?.nativeElement.offsetWidth;
    this.apexRadarChartRef.chart.width = this.apexRadarChartRef?.nativeElement.offsetWidth;
    this.apexDonutChart.chart.width = this.apexDonutChartRef?.nativeElement.offsetWidth;
    this.apexRadialChart1.chart.width = this.apexRadialChartRef?.nativeElement.offsetWidth;
  }
  }
  
