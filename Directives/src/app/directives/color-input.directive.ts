/* Attribute Directive using @Input()
To take user input in custom directive,
 we need to create a property decorated with @Input().
*/
import { Directive, AfterViewInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColorInput]'
})
export class ColorInputDirective implements AfterViewInit{

  @Input() inputColor:string;
  constructor(private el:ElementRef) { }

  ngAfterViewInit(): void {
      this.el.nativeElement.style.color = this.inputColor;
  }

  /*AfterViewInit: It is the lifecycle hook that is called after
   a component view has been fully initialized. To use AfterViewInit, 
   our class will implement it and override its method ngAfterViewInit().
  */
}
