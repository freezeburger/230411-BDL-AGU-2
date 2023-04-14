import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './page-login.component';

const routes: Routes = [
  {
    path:'login',
    component:PageLoginComponent
  },
  {
    path:'register',
    component:PageLoginComponent
  },
  {
    path:'**',
    redirectTo:'login',
    pathMatch:'prefix'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLoginRoutingModule { }
