import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = ''; // reescrevendo o nome
  @Input() userData! : {   // o ! fala para o typescript que o dado vai ser iniciado
    email: string,
    password: number
  }

  constructor() { }

  ngOnInit(): void {
  }

}
