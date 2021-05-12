import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hyperlink',
  template: `
            <div>
				<a [href]="link.url" target="_blank">
					{{link.name}}
				</a>
			</div>`,
  styles: [`
           a{
				text-decoration: none;
				color: blue;
				cursor: pointer;
			}`]
})
export class HyperlinkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  @Input() public link:{
	  url:string,
      name:string	
  }

}
