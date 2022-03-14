import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = "Joaquim"; // criando um nome para compartilhar

  userData = {
    email: "daniel@gmail.com",
    password: 12345,
  }
  
  title = 'curso-angular';
}
