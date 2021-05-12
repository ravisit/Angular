import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HelloComponent} from './hello/hello.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsInfoComponent } from './products-info/products-info.component';

const routes: Routes=[
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'hello', component:HelloComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'products-info', component:ProductsInfoComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HelloComponent, LoginComponent, HomeComponent, ProductsInfoComponent]
