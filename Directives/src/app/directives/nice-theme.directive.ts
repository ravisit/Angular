/* 2. Attribute directive to change text color,
 background color and font size of HTML Element
 */

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNiceTheme]'
})
export class NiceThemeDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color='#00cc66';
    el.nativeElement.style.backgroundColor='#ccccff';
    el.nativeElement.style.fontSize='20px';
  }

}
