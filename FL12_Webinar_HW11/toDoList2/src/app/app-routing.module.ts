import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {UserFormComponent} from "./user-form/user-form.component";


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'users/:userId', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
