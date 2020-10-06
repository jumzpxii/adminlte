import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-macth',
  templateUrl: './macth.component.html',
  styleUrls: ['./macth.component.css'],
})
export class MacthComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartLabels: Label[] = ['PlayerA', 'PlayerB', 'PlayerC', 'PlayerD'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];

  public barChartOptions2: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartLabels2: Label[] = [
    'PlayerA',
    'PlayerB',
    'PlayerC',
    'PlayerD',
  ];
  public barChartType2: ChartType = 'bar';
  public barChartLegend2 = true;
  public barChartData2: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];

  public barChartOptions3: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartLabels3: Label[] = [
    'PlayerA',
    'PlayerB',
    'PlayerC',
    'PlayerD',
  ];
  public barChartType3: ChartType = 'bar';
  public barChartLegend3 = true;
  public barChartData3: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];

  public barChartOptions4: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartLabels4: Label[] = [
    'PlayerA',
    'PlayerB',
    'PlayerC',
    'PlayerD',
  ];
  public barChartType4: ChartType = 'bar';
  public barChartLegend4 = true;
  public barChartData4: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];

  public barChartOptions5: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartLabels5: Label[] = [
    'PlayerA',
    'PlayerB',
    'PlayerC',
    'PlayerD',
  ];
  public barChartType5: ChartType = 'bar';
  public barChartLegend5 = true;
  public barChartData5: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];

  public barChartOptions6: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartLabels6: Label[] = [
    'PlayerA',
    'PlayerB',
    'PlayerC',
    'PlayerD',
  ];
  public barChartType6: ChartType = 'bar';
  public barChartLegend6 = true;
  public barChartData6: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
