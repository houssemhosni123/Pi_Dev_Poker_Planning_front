import { Component, Input, OnInit } from "@angular/core";
import { KpiData } from "Models/kpiData.model";
import { VelocityData } from "Models/velocityData.model";
import { colors } from "app/colors.const";

@Component({
  selector: "app-velocity-data-chart",
  templateUrl: "./velocity-data-chart.component.html",
  styleUrls: ["./velocity-data-chart.component.scss"],
})
export class VelocityDataChartComponent implements OnInit {
  @Input() data: KpiData;
  private tooltipShadow = "rgba(0, 0, 0, 0.25)";
  private successColorShade = "#28dac6";
  private warningColorShade = "#ffe802";
  private warningLightColor = "#FDAC34";
  // doughnut Chart
  public doughnutChart = {
    chartType: "doughnut",
    options: {
      responsive: false,
      responsiveAnimationDuration: 500,
      cutoutPercentage: 60,
      aspectRatio: 1.4,
      legend: { display: false },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            var label = data.datasets[0].labels[tooltipItem.index] || "",
              value = data.datasets[0].data[tooltipItem.index];
            var output = " " + label + " : " + value + " %";
            return output;
          },
        },
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: this.tooltipShadow,
        backgroundColor: colors.solid.white,
        titleFontColor: colors.solid.black,
        bodyFontColor: colors.solid.black,
      },
    },

    datasets: [
      {
        labels: ["US Faciles", "US Difficiles"],
        data: [10, 10, 80],
        backgroundColor: [
          this.successColorShade,
          this.warningLightColor,
          colors.solid.primary,
        ],
        borderWidth: 0,
        pointStyle: "rectRounded",
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {
    let list = [];
    list.push(this.data.easyUserStoriesRate);
    list.push(this.data.difficultUserStoriesRate);
    this.doughnutChart = {
      chartType: "doughnut",
      options: {
        responsive: false,
        responsiveAnimationDuration: 500,
        cutoutPercentage: 60,
        aspectRatio: 1.4,
        legend: { display: false },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              var label = data.datasets[0].labels[tooltipItem.index] || "",
                value = data.datasets[0].data[tooltipItem.index];
              var output = " " + label + " : " + value + " %";
              return output;
            },
          },
          // Updated default tooltip UI
          shadowOffsetX: 1,
          shadowOffsetY: 1,
          shadowBlur: 8,
          shadowColor: this.tooltipShadow,
          backgroundColor: colors.solid.white,
          titleFontColor: colors.solid.black,
          bodyFontColor: colors.solid.black,
        },
      },

      datasets: [
        {
          labels: ["US Faciles", "US Difficiles"],
          data: list,
          backgroundColor: [this.successColorShade, this.warningLightColor],
          borderWidth: 0,
          pointStyle: "rectRounded",
        },
      ],
    };
  }
}
