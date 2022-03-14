import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: string = "Daniel";
  age: number = 30;
  job = 'Programador';
  hobbies = [ 'correr', 'jogar', 'estudar']

  car = {
    name: "Polo",
    yaer: 2019
  }

  constructor() { }

  ngOnInit(): void {
  }

}
