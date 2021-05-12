import { Component, OnInit , Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InteractionService } from '../interaction.service';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  //@Input() name: string;

  //phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
   form = new FormGroup({
     email: new FormControl('', [Validators.required, Validators.email]),
     phone: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
   });

   get mail(){
    return this.form.get('email');
    }
   get mobile(){
     return this.form.get('phone');
   }

  // public name;
   text;

  constructor(private Aroute:ActivatedRoute, private _router:Router, private _credential:InteractionService) { }

  ngOnInit(): void {
   /* let username = this.Aroute.snapshot.paramMap.get('username');
    this.name = username; */
    this._credential.share.subscribe(d=> this.text =d);
  }

  //public values;

 /* onKey(event:any){
    this._helloHomeService.sendHelloData(event.target.value);  
  } */
  phone;
  updatePhone(phone){
    this._credential.updateMobile(phone);  
  }
  email;
  updateEmail(email){
    this._credential.updateMail(email);
  }
  nextPage(){
    this._router.navigate(['/products-info']);

  }

}
