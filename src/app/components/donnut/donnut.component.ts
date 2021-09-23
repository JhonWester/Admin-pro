import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-donnut',
  templateUrl: './donnut.component.html',
  styles: [
  ]
})
export class DonnutComponent implements OnInit {
  @Input() title: string = 'Sin titulo';
  @Input() public labels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() public data: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Array<Color> = [{backgroundColor: ['#6857E6', '#009FEE', '#F02059']}];

  constructor() { }

  ngOnInit(): void {
  }

}
