import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input() progress: number = 40;
  @Output() newProgress: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  get GetProgress() {
    return `${this.progress}%`;
  }

  changeProgress(value: number): number {
    if (value >= 0 && this.progress >= 100) {
      this.progress = 100;
      this.newProgress.emit(this.progress);
    }

    if (value <= 0 && this.progress <= 0) {
      return this.progress = 0;
    }
    this.progress = this.progress + value;
    this.newProgress.emit(this.progress);
  }
}
