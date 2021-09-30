import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Data, Router } from '@angular/router';
import { Observable, pipe, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/Operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  currentPage: string;
  title$: Subscription;

  constructor(private router: Router) {
    this.title$ = this.getArgumentRoute().subscribe(result => {
      this.currentPage = result.title; 
      document.title = `Admin-Pro ${this.currentPage}`;
    });
   }
   
   ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
    this.title$.unsubscribe();
  }

  getArgumentRoute(): Observable<Data> {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map(data => data.snapshot.data)      
    )
  }

}
