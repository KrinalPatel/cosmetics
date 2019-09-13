import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import {LipstickComponent } from './lipstick/lipstick.component';
import {FeedbackComponent}from './feedback/feedback.component'
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',redirectTo: '/about', pathMatch:'full' 
  },
  {path:'about', component: AboutComponent},
  {path: 'product', component: ProductComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'login',component: LoginComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'lipstick',component: LipstickComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
