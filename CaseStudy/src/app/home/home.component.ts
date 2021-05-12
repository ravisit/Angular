import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _credential:InteractionService, private _router:Router) { }

   phone;
   email;

  public rem1;
  public rem2;
  public rem3;

  ngOnInit(): void {
   /* this._helloHomeService.helloData$
    .subscribe(message =>{
      this.phone = message;
      this.email = message;
    }) */
    this._credential.share1
    .subscribe(d => this.phone = d);
    this._credential.share2
    .subscribe(d => this.email = d);
    this._credential.rem1
    .subscribe(data => this.rem1 = data); 
    this._credential.rem2
    .subscribe(data => this.rem2 = data); 
    this._credential.rem3
    .subscribe(data => this.rem3 = data); 
  } 

  
  onNext(rem4,rem5,rem6){
    this._router.navigate(['/products-info']);
    this._credential.sendRem4(rem4);
    this._credential.sendRem5(rem5);
    this._credential.sendRem6(rem6);
  }



}
