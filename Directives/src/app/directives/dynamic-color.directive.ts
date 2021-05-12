/*Attribute Directive using @Input() and @HostListener()
We will create attribute directive that will accept user 
input as well listen events. The role of @Input() decorator 
is to accept user input and the role of @HostListener() 
decorator is to listen event. Here we will create attribute 
directive named as dynamicColor. It will accept two inputs 
for background color. Second input color will be default color 
and will be active if first input color has not been given.
*/

import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDynamicColor]'
})
export class DynamicColorDirective {

  @Input('appDynamicColor') appDynamicColor: string;
  @Input() defaultValue: string;

  constructor(private el: ElementRef) { }
   
  @HostListener('mouseover') onMouseOver() {
    this.changeBackgroundColor(this.appDynamicColor || this.defaultValue);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('white');
  }

  private changeBackgroundColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
