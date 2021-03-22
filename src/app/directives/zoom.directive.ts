import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter')
  zoomIn() {
    this.el.nativeElement.style.maxWidth = '10%';
  }
}
