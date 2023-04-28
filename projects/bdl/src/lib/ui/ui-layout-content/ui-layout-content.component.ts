import { Component, Host, Optional } from '@angular/core';
import { UiLayoutComponent } from '../ui-layout/ui-layout.component';

@Component({
  selector: 'bdl-ui-layout-content , layout-content',
  template:'<ng-content></ng-content>'
})
export class UiLayoutContentComponent {

  constructor(
   @Optional() @Host() layout:UiLayoutComponent
  ){
    if(!layout) console.log('%c Must be used in "bdl-ui-layout" ', 'color:hotPink;font-size:30px')
  }
}
