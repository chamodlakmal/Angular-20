import { Component, inject, input, output } from '@angular/core';
import { Logging } from '../services/logging';

@Component({
  selector: 'app-widget',
  imports: [],
  templateUrl: './widget.html',
  styleUrl: './widget.css',
})
export class Widget {
  private service = inject(Logging);

  title = input<string>('Widget Title');
  body = input<string>('Widget Body');

  closed = output<void>();

  onClosed() {
    this.closed.emit();
    this.service.log('Widget closed');
  }
}
