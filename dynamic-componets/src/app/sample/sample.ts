import {
  Component,
  ComponentRef,
  effect,
  inputBinding,
  outputBinding,
  signal,
  twoWayBinding,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { Todo } from '../todo/todo';
import { Highlight } from '../directives/highlight';

@Component({
  selector: 'app-sample',
  imports: [],
  templateUrl: './sample.html',
  styleUrl: './sample.css',
})
export class Sample {
  vcr = viewChild('container', { read: ViewContainerRef });

  private componentRef?: ComponentRef<Todo>;

  collapsedHome = signal(true);

  //constructor() {
  //  effect(() => {
  //    console.log('collapsedHome:', this.collapsedHome());
  //    this.componentRef?.setInput('collapsed', this.collapsedHome());
  //  });
  //}

  onCreate() {
    this.vcr()?.clear();
    this.componentRef = this.vcr()?.createComponent(Todo, {
      bindings: [
        inputBinding('title', () => 'Dynamic Todo Title'),
        inputBinding('description', () => 'Dynamic Todo Description'),
        outputBinding('closed', () => {
          this.componentRef?.destroy();
          this.componentRef = undefined;
          console.log('Todo component closed');
        }),
        //inputBinding('collapsed', this.collapsedHome),
        //outputBinding('collapsedChange', (value: boolean) => {
        //  console.log('collapsed', value);
        //  this.collapsedHome.set(value);
        //}),
        twoWayBinding('collapsed', this.collapsedHome),
      ],
      directives: [
        {
          type: Highlight,
          bindings: [inputBinding('appHighlightColor', () => 'red')],
        },
      ],
    });

    //this.componentRef?.setInput('title', 'Dynamic Todo Title');
    //this.componentRef?.setInput('description', 'Dynamic Todo Description');
    //this.componentRef?.instance.closed.subscribe(() =>
    //  this.componentRef?.destroy()
    //);

    //this.componentRef?.setInput('collapsed', this.collapsedHome());
    //this.componentRef?.instance.collapsed.subscribe((value) => {});
  }

  onDestroy() {
    this.vcr()?.clear();
  }

  onToggle() {
    this.collapsedHome.update((value) => !value);
  }
}
