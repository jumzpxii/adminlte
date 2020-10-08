import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-macth',
  templateUrl: './macth.component.html',
  styleUrls: ['./macth.component.css'],
})
export class MacthComponent implements OnInit {
  topic:Array<string> = ['Topic 1','Topic 2','Topic 3','Topic 4','Topic 5','Topic 6']
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

  constructor() {}

  ngOnInit(): void {}
}
