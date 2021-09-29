import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private theme = document.querySelector('#theme');

  constructor() { 
    const theme = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.theme.setAttribute('href', theme);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.theme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrent();
  }

  
  checkCurrent(): void {
    const links = document.querySelectorAll('.selector');

    links.forEach(element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const current = this.theme.getAttribute('href');
      
      if (btnThemeUrl === current) {
        element.classList.add('working');
      }
      
    });
  }
}
