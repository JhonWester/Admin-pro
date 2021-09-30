import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then(console.log);
  }

  getUsuarios(): Promise<any> {
    return new Promise(resolve => {
      fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(body => resolve(body.data))
    });
  }

}
