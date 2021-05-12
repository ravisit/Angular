import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Icredential} from '../credential'
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

 private content = new BehaviorSubject<string>("Default");
 public share = this.content.asObservable();
 private content1 = new BehaviorSubject<string>("Default");
 public share1 = this.content1.asObservable();
 private content2 = new BehaviorSubject<string>("Default");
 public share2 = this.content2.asObservable();

  private remark1= new BehaviorSubject<string>("remark1");
  public rem1=this.remark1.asObservable();
  private remark2= new BehaviorSubject<string>("remark2");
  public rem2=this.remark2.asObservable();
  private remark3= new BehaviorSubject<string>("remark3");
  public rem3=this.remark3.asObservable();
  private remark4= new BehaviorSubject<string>("remark4");
  public rem4=this.remark4.asObservable();
  private remark5= new BehaviorSubject<string>("remark5");
  public rem5=this.remark5.asObservable();
  private remark6= new BehaviorSubject<string>("remark6");
  public rem6=this.remark6.asObservable();


  private _url:string="/assets/data/credential.json"

  constructor(private http: HttpClient) { }

  getCredential():Observable<Icredential[]>{
    return this.http.get<Icredential[]>(this._url);
  }

  updateIt(text){
    this.content.next(text);
  }

  updateMobile(text){
    this.content1.next(text);
  }
  updateMail(text2){
    this.content2.next(text2);
  }
  sendRem1(rem1){
    this.remark1.next(rem1);
  }
  sendRem2(rem2){
    this.remark2.next(rem2);
  }
  sendRem3(rem3){
    this.remark3.next(rem3);
  }
  sendRem4(rem4){
    this.remark4.next(rem4);
  }
  sendRem5(rem5){
    this.remark5.next(rem5);
  }
  sendRem6(rem6){
    this.remark6.next(rem6);
  }
}

