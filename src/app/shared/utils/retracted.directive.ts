import { Directive, Host, HostBinding } from '@angular/core';
 // import { UiHeaderComponent } from '../ui/ui-header/ui-header.component';

@Directive({
  selector: 'app-ui-header[retracted]'
})
export class RetractedDirective {

  @HostBinding('style.display') display = 'block';
  @HostBinding('style.height') height = '6vh';
  @HostBinding('style.overflow') overflow = 'hidden';

  constructor(/* @Host() header:UiHeaderComponent */){}

}
