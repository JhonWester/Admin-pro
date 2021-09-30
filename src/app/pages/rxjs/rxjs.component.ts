import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { take, map, filter } from 'rxjs/Operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  observable: Subscription;
  constructor() { }
  
  ngOnInit(): void {
    this.observable = this.intervalos().subscribe(console.log);
  }
  
  ngOnDestroy(): void {
    this.observable.unsubscribe();
  }
  intervalos(): Observable<number> {
    return interval(500).pipe(
      map(val => val + 1),
      filter(state => state % 2 === 0)
      //take(10)
      );
  }
}
