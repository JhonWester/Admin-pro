import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
  labelsGarfica1: Label[] = ['Tiendas', 'Cines', 'Centros comerciales'];
  multiGarifaca1: MultiDataSet = [[350, 450, 100]];
  constructor() { }

  ngOnInit(): void {
  }

}
