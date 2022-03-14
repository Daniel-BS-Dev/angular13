import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  // diretiva style
  size= 10;
  font= 'Arial';
  color= 'red';


  // diretiva class
  class = ["green-title", "small-title"] // name das classes

  // diretiva for
  numberFor = [1, 2, 3, 4, 5, 6, 7]

  messageIf = false;

  name: string = 'Matheus';
  

  constructor() { }

  ngOnInit(): void {
  }

}
