import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  public theme = document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void {
    this.setTheme();
  }

  setTheme(): void {
    const theme = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.theme.setAttribute('href', theme);
  }

}
