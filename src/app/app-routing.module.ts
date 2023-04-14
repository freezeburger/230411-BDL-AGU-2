import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;
import { BdlRoutes } from './core/interface/bdl-routes';

const routes: Routes = [
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
