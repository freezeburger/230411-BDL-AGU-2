import { Component, Optional } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'bdl-ui-navigation',
  templateUrl: './ui-navigation.component.html',
  styleUrls: ['./ui-navigation.component.scss']
})
export class UiNavigationComponent {

  public routes:Routes = this.router?.config
                                .filter(  r => r.path !== '**' ) as Routes;
  constructor(
    @Optional() private router:Router
  ){
  }

}
