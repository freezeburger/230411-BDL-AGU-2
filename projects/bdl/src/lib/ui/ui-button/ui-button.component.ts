import { Component, Input } from '@angular/core';

@Component({
  selector: 'bdl-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.css']
})
export class UiButtonComponent {

    @Input() disabled = false;
    @Input() level:UiButtonLevel = 'ACTION';

}
export type UiButtonLevel = 'ACTION' | 'CONFIG' | 'CANCEL';


