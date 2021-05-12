/*Here we will create a directive named as textSize.
 It will take user input text size.
*/
import { Directive, AfterViewInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextSize]'
})
export class TextSizeDirective implements AfterViewInit{

  @Input('appTextSize') tsize: string;
  constructor(private el:ElementRef) { }

  ngAfterViewInit(): void {
    this.el.nativeElement.style.fontSize = this.tsize;
  }

}
