import { Directive, ElementRef, inject, input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight implements OnInit {
  appHighlightColor = input<string>('yellow');

  private el = inject(ElementRef);

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.appHighlightColor();
  }
}
