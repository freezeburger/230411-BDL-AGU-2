import { Component, Input } from '@angular/core';

@Component({
  selector: 'bdl-ui-image',
  templateUrl: './ui-image.component.html',
  styleUrls: ['./ui-image.component.scss']
})
export class UiImageComponent {
 @Input() source = 'http://placehold.it/150';
 @Input() size:UiImageSize = {h:150,w:150};
}

export interface UiImageSize {
  h:number;
  w:number;
}
