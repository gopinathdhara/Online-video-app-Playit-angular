import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyvideosComponent } from './myvideos/myvideos.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'home', component: HomeComponent },
  { path: 'register',   component:RegisterComponent },
  { path: 'login',   component:LoginComponent },
  { path: 'myvideos',   component:MyvideosComponent },
  //{ path: '**', component: PageNotFoundComponent } ,// Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
