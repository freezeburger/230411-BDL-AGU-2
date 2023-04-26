import { Directive } from '@angular/core';

@Directive({
  selector: '[bdlInactive]'
})
export class InactiveDirective {

  constructor() {
    console.log(this)
  }

}
