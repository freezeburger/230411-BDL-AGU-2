import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMessagesComponent } from './page-messages.component';

const routes: Routes = [
  {
    path:'',
    component:PageMessagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageMessagesRoutingModule { }
