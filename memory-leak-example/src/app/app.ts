import { Component, signal } from '@angular/core';
import { LeakyChild } from './leaky-child/leaky-child';

@Component({
  selector: 'app-root',
  imports: [LeakyChild],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected showChild = signal(false);

  protected toggleChild() {
    this.showChild.set(!this.showChild());
  }
}
