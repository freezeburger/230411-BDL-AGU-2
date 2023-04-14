import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'app-ui-image[fallback]'
})
export class UiImageFallbackDirective {

  private defaultUrl = 'http://placehold.it/150';
  @Input() fallback = '';

  constructor(
    private uiImageElement:ElementRef
  ) {
  }

  ngOnInit(){
    this.fallback = this.fallback || this.defaultUrl;
    this.uiImageElement.nativeElement
    .querySelector('img')
    .addEventListener('error', (evt:any)=> evt.target.src = this.fallback )
  }

}
