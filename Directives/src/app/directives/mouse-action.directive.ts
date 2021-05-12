/*Attribute Directive using @HostListener() to listen Event
We can create custom attribute directive that will perform 
changes in appearance in DOM when an event is fired. To listen
any event we need to use @HostListener() decorator. We need to 
assign event name to @HostListener() decorator. Here we will create 
an attribute directive that will change background color of host 
element when mouseover and mouseleave events are fired.
*/

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseAction]'
})
export class MouseActionDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseover') onMouseOver(){
    this.changeBackgroundColor('darkgrey');
  }

  @HostListener('mouseleave') onMounLeave(){
    this.changeBackgroundColor('white');
  }

  private changeBackgroundColor(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
