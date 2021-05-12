import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public auth="";
  public credential;
  constructor(private _credential:InteractionService,private _router:Router) { }

  ngOnInit(): void {
    this._credential.getCredential()
    .subscribe(data => this.credential = data);
  }
  
  data={
    username:"",
    password:""
  };
  formSubmit(data){
    if(this.data.username=="")
    this.auth="msg1";
    else if(this.data.password=="")
    this.auth="msg2";
    else{
      let k=false;
      let s=false;
      for(let i=0;i<2;i++){
        if(this.data.username==this.credential[i].username){
          k=true;
          if(this.data.password==this.credential[i].password)
          s=true;
        }
      }
      if(k==true && s==false)
      this.auth="msg3";
      else if(k==false)
      this.auth="msg4";
      else if(k==true && s==true)
        this._router.navigate(['/hello']);
    } 
  }
  text;
  updateText(text){
    this._credential.updateIt(text);
  }
}