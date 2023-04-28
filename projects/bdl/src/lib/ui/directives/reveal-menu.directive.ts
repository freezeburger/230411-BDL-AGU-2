
import { HostListener, Directive , HostBinding, ElementRef, AfterViewInit, AfterContentInit, ContentChildren , QueryList } from '@angular/core';
import { UiLayoutContentComponent } from '../ui-layout-content/ui-layout-content.component';

@Directive({
  selector: 'bdl-ui-layout[revealMenu]'
})
export class RevealMenuDirective implements AfterViewInit, AfterContentInit {

  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'relative';

  private menuElement:HTMLElement | null = null;

  constructor(
    private element:ElementRef
  ) { }

  @ContentChildren(UiLayoutContentComponent) contents!:QueryList<UiLayoutContentComponent>;

  ngAfterContentInit(): void {
      console.log('revealMenu', this.contents.toArray() )
  }

  ngAfterViewInit(): void {
    this.menuElement = this.element.nativeElement.querySelector('#menu') || null;
  }

  @HostListener('window:keydown.alt.m')
  openMenu(){

    if( !this.menuElement ) return ;

    const opened = this.menuElement.style.display === 'block';
    this.menuElement.style.display =  opened ? 'none':'block';
  }


}
