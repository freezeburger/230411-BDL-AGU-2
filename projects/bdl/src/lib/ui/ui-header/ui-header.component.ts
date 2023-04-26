import { Component, Input } from '@angular/core';

@Component({
  selector: 'bdl-ui-header',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.scss']
})
export class UiHeaderComponent {
  @Input() color:UIHeaderColor = 'secondary';
}

type UIHeaderColor = 'secondary' | 'danger' | 'primary' ;
