/* 1. Custom Attribute directive to change attribute directive 
      We will start creating attribute directive with a simple example.
      We are creating a directive named as "Myred" directive.
       When we will use it with HTML element such as <p> and <div>, 
       the text color within that element will be red.
*/

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Myred]'
})
export class MyredDirective {

  constructor( el:ElementRef) { 
     el.nativeElement.style.color ='red';
  }

}
