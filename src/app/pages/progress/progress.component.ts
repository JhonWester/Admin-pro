import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progress1: number = 15;
  progress2: number = 50; 

  constructor() { }

  ngOnInit(): void {
  }

  get Porcentaje1() {
    return `${this.progress1}%`;
  }

  get Porcentaje2() {
    return `${this.progress2}%`;
  }
  


}
