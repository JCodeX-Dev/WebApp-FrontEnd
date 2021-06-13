import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  tooltip: HTMLElement;
  // tslint:disable-next-line:no-input-rename
  @Input() appTooltip = '';

  // delay = 500;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  // tslint:disable-next-line:typedef
  @HostListener('mouseover') onMouseEnter() {
    if (this.el.nativeElement.getElementsByTagName('span').length === 0) {
      this.showTooltip();
    }
  }

  // tslint:disable-next-line:typedef
  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  // tslint:disable-next-line:typedef
  showTooltip() {
    this.tooltip = this.renderer.createElement('span');
    // creating a span

    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.appTooltip)
      // adding the tooltip text into the tooltip span
    );
    this.renderer.appendChild(this.el.nativeElement, this.tooltip);
    // appending to the document
    this.renderer.addClass(this.tooltip, 'tooltip');
    // adding the tooltip styles
  }

  // tslint:disable-next-line:typedef
  hideTooltip() {
    this.tooltip = this.el.nativeElement.firstChild;
    this.renderer.removeChild(this.el.nativeElement, this.tooltip);
    // on mouse over it will remove the opacity
  }
}
