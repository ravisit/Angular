/*Attribute Directive using Multiple @Input()
Here we will create an attribute directive that
 will accept more than one user input. To accept
  more than one user input, we need to use
   more than one @Input() decorated property in our class.
*/
import { Directive, AfterViewInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomTheme]'
})
export class CustomThemeDirective implements AfterViewInit{

  @Input() tcolor: string;
  @Input() bcolor: string;
  @Input() tsize: string;
  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {

    this.tcolor = this.tcolor || 'green';
    this.bcolor = this. bcolor || 'cyan';
    this.tsize = this.tsize || '20px';
    this.el.nativeElement.style.color = this.tcolor;
    this.el.nativeElement.style.backgroundColor = this.bcolor;
    this.el.nativeElement.style.fontSize = this.tsize;
  }
}
