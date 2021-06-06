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

    // console.log(this.el.nativeElement.tagName);
    // console.log(this.appTooltip);
    this.showTooltip();
  }

  // tslint:disable-next-line:typedef
  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  // tslint:disable-next-line:typedef
  showTooltip() {
    // this.tooltip = this.el.nativeElement;
    this.tooltip = this.renderer.createElement('span');
    // creating a span
    // this.tooltip.appendChild(this.renderer.createElement('span'));
    // appending a span to the tooltip

    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.appTooltip)
      // adding the tooltip text into the tooltip span
    );
    // const hostPos = this.el.nativeElement.getBoundingClientRect();
    // getting the hight width and positions of the target element
    // tslint:disable-next-line:one-variable-per-declaration
    // let top, left;

    // top = hostPos.bottom;
    // left = hostPos.left + hostPos.width / 2;
    // this.renderer.setStyle(this.tooltip, 'top', `${top}px`);
    // adding a top positions value for the tooltip
    // this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
    // adding the left value
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
  // Error on mouse leave - unable to remove child
}
