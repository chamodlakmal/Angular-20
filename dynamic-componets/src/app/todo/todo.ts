import { Component, input, model, output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  title = input.required<string>();

  description = input.required<string>();

  collapsed = model(false);

  closed = output<void>();

  toggleCollaped() {
    this.collapsed.set(!this.collapsed());
  }
}
