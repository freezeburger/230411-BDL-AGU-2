import { Component, ElementRef, Host } from '@angular/core';
import { UiButtonComponent } from '../ui-button/ui-button.component';

@Component({
  selector: 'bdl-ui-button-options',
  template: '<ng-content></ng-content>',
  styleUrls: ['./ui-button-options.component.css']
})
export class UiButtonOptionsComponent {

  constructor(
    @Host() private bdlButton: UiButtonComponent,
  ) {
  }
}
