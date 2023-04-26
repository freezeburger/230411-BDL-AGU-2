import { AfterViewInit, Directive, Host } from '@angular/core';
import { UiButtonComponent } from '../ui-button/ui-button.component';

@Directive({
  selector: 'bdl-ui-button[bdlInactive]'
})
export class InactiveDirective {

  constructor(
    @Host() private bdlButton:UiButtonComponent
  ) {
    this.bdlButton.disabled = true;
  }


}
