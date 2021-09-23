import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public theme = document.querySelector('#theme');
  public links: NodeListOf<Element>;

  constructor() { }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.checkCurrent();
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.theme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrent();
  }

  checkCurrent(): void {

    this.links.forEach(element => {
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
