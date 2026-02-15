import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class Resaltar {

  constructor(private el : ElementRef, private render: Renderer2) {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
    this.render.setStyle(this.el.nativeElement, 'fontWeight', 'bold');
   }

}
