import { Component, Input, OnInit } from "@angular/core";
import { KpiData } from "Models/kpiData.model";
import { colors } from "app/colors.const";

@Component({
  selector: "app-us-data-chart",
  templateUrl: "./us-data-chart.component.html",
  styleUrls: ["./us-data-chart.component.scss"],
})
export class UsDataChartComponent implements OnInit {
  @Input() data: KpiData;
  // ng2-flatpickr options
  public DateRangeOptions = {
    altInput: true,
    mode: "range",
    altInputClass:
      "form-control flat-picker bg-transparent border-0 shadow-none flatpickr-input",
    defaultDate: ["2019-05-01", "2019-05-10"],
    altFormat: "Y-n-j",
  };
  private grid_line_color = "rgba(200, 200, 200, 0.2)"; // RGBA color helps in dark layout
  private tooltipShadow = "rgba(0, 0, 0, 0.25)";
  private successColorShade = "#28dac6";
  private labelColor = "#6e6b7b";
  // Bar Chart
  public barChart = {
    chartType: "bar",
    datasets: [
      {
        data: [275, 90, 190, 205, 125, 85, 55, 87, 127, 150, 230, 280, 190],
        backgroundColor: this.successColorShade,
        borderColor: "transparent",
        hoverBackgroundColor: this.successColorShade,
        hoverBorderColor: this.successColorShade,
      },
    ],
    labels: ["A faire", "En cours", "Terminé"],
    options: {
      elements: {
        rectangle: {
          borderWidth: 2,
          borderSkipped: "bottom",
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        display: false,
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: this.tooltipShadow,
        backgroundColor: colors.solid.white,
        titleFontColor: colors.solid.black,
        bodyFontColor: colors.solid.black,
      },
      scales: {
        xAxes: [
          {
            barThickness: 15,
            display: true,
            gridLines: {
              display: true,
              color: this.grid_line_color,
              zeroLineColor: this.grid_line_color,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              fontColor: this.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: this.grid_line_color,
              zeroLineColor: this.grid_line_color,
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 20,
              fontColor: this.labelColor,
            },
          },
        ],
      },
    },
    legend: false,
  };
  constructor() {}

  ngOnInit(): void {
    let list = [];
    list.push(this.data.toDoUs);
    list.push(this.data.inProgressUs);
    list.push(this.data.finishedUs);
    this.barChart = {
      chartType: "bar",
      datasets: [
        {
          data: list,
          backgroundColor: this.successColorShade,
          borderColor: "transparent",
          hoverBackgroundColor: this.successColorShade,
          hoverBorderColor: this.successColorShade,
        },
      ],
      labels: ["A faire", "En cours", "Terminé"],
      options: {
        elements: {
          rectangle: {
            borderWidth: 2,
            borderSkipped: "bottom",
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration: 500,
        legend: {
          display: false,
        },
        tooltips: {
          // Updated default tooltip UI
          shadowOffsetX: 1,
          shadowOffsetY: 1,
          shadowBlur: 8,
          shadowColor: this.tooltipShadow,
          backgroundColor: colors.solid.white,
          titleFontColor: colors.solid.black,
          bodyFontColor: colors.solid.black,
        },
        scales: {
          xAxes: [
            {
              barThickness: 15,
              display: true,
              gridLines: {
                display: true,
                color: this.grid_line_color,
                zeroLineColor: this.grid_line_color,
              },
              scaleLabel: {
                display: true,
              },
              ticks: {
                fontColor: this.labelColor,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                color: this.grid_line_color,
                zeroLineColor: this.grid_line_color,
              },
              ticks: {
                stepSize: 100,
                min: 0,
                max: 20,
                fontColor: this.labelColor,
              },
            },
          ],
        },
      },
      legend: false,
    };
  }
}
