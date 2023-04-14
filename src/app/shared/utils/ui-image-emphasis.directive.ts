import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'app-ui-image[emphasis]'
})
export class UiImageEmphasisDirective {

  private scaleTarget = 'scale(1.1)'
  private scaleOrigin = 'scale(1)'

  @HostBinding('style.transform-origin') private transformOrigin = 'center'
  @HostBinding('style.transition') private transition = 'transform .3s ease'
  @HostBinding('style.transform') private transform = this.scaleOrigin;

  @HostListener('mouseenter')
  zoomIn(){
    this.transform = this.scaleTarget;
  }
  @HostListener('mouseleave')
  zoomOut(){
    this.transform = this.scaleOrigin;
  }

  constructor() { }

}
