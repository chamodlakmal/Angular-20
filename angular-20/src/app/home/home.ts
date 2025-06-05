import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  n = 2;

  person = {
    name: 'John Doe',
    age: 30,
  };

  name = 'Chamod';
}
