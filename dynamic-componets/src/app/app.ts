import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Main } from './main/main';
import { Sample } from './sample/sample';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Main, Sample],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'dynamic-componets';
}
