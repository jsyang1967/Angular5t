import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { InputButtonComponent } from './input-button/input-button.component';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
  _el: HTMLElement;
  @Input() setColor = 'yellow';

  constructor(el:ElementRef) {
    this._el = el.nativeElement;
   }

   @HostListener('mouseenter') onmouseenter(){
      console.log(this.setColor);
      this._el.style.backgroundColor = this.setColor;
     }
     @HostListener('mouseleave') onmouseleave(){
      // console.log(this.setColor);
      this._el.style.backgroundColor = 'red';
     }

}
