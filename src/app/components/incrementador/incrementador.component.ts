import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input() progress: number = 40;
  @Input() btnClass: string = 'btn-info';
  @Output() newProgress: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  get GetProgress() {
    return `${this.progress}%`;
  }

  onChanges(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    this.newProgress.emit(this.progress);
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
