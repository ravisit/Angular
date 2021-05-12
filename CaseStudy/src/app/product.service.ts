import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _url ='http://localhost:3000/remarks';

  constructor(private _http:HttpClient) { }

  remarkSaved(prod:Product){
    return this._http.post<any>(this._url, prod);
  }

}
