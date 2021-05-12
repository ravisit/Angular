import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivesDemo';
  txtsize1='25px';
  txtsize2='20px';
  txtsize3='15px';
  colors = ['CYAN', 'GREEN','YELLOW'];
  myColor = '';
}
