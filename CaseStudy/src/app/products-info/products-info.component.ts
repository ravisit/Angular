import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-products-info',
  templateUrl: './products-info.component.html',
  styleUrls: ['./products-info.component.css']
})
export class ProductsInfoComponent implements OnInit {

  //prodModel = new Product("It is good product", "abc");

  constructor(private _router:Router, private _productservice:ProductService, private _interaction:InteractionService) { }

  remarks1;
  remarks2;
  remarks3;

  public rem4;
  public rem5;
  public rem6;
  
  bool=false;

  ngOnInit(): void {
    this._interaction.rem4
    .subscribe(data => this.rem4 = data); 
    if(this.rem4!="remark4"){
      this.remarks1=this.rem4;
    }
    this._interaction.rem5
    .subscribe(data => this.rem5 = data); 
    if(this.rem5!="remark5"){
      this.remarks2=this.rem5;
    }
    this._interaction.rem6
    .subscribe(data => this.rem6 = data); 
    if(this.rem6!="remark6"){
      this.remarks3=this.rem6;
    } 
    
  }


  goHome(){
    this._router.navigate(['/home']);
  }

 
  onsave(rem1,rem2,rem3){
      this.bool=true;
      this._interaction.sendRem1(rem1);
      this._interaction.sendRem2(rem2);
      this._interaction.sendRem3(rem3);
  }
    
  
}
 
