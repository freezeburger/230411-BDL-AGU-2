import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMessagesComponent } from './pages/page-messages/page-messages.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { BdlRoutes } from './core/interface/bdl-routes';

const routes: BdlRoutes = [
  {
    path:'home',
    loadChildren:() => import('./pages/page-home/page-home.module').then( m => m.PageHomeModule ),
    title:'BDl - Home',
    data:{
      linkLabel:'Retour Home'
    }
  },
  {
    path:'messages',
    loadChildren:() => import('./pages/page-messages/page-messages.module').then( m => m.PageMessagesModule ),
    title:'BDl - Messages',
    data:{
      linkLabel:'Messages'
    }
  },
  {
    path:'connection',
    loadChildren:() => import('./pages/page-login/page-login.module').then( m => m.PageLoginModule ),
    title:'BDl - Identification',
    data:{
      linkLabel:'Login'
    }
  },
  {
    path:'**',
    title:'Redirect',
    redirectTo:'login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
