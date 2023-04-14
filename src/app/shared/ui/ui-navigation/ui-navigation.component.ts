import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BdlRoute, BdlRoutes } from 'src/app/core/interface/bdl-routes';

@Component({
  selector: 'app-ui-navigation',
  templateUrl: './ui-navigation.component.html',
  styleUrls: ['./ui-navigation.component.scss']
})
export class UiNavigationComponent {

  public routes:BdlRoutes = this.router.config
                                .filter(  r => r.path !== '**' ) as BdlRoutes;
  constructor(
    private router:Router
  ){
  }

}
