import { AfterContentInit, Directive, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Directive({
  selector: 'layout-content[header][asPageTitle]'
})
export class AsPageTitleDirective implements AfterContentInit {

  constructor(
    private element:ElementRef,
    private title:Title,
  ) { }

  ngAfterContentInit(): void {
    this.title.setTitle( this.element.nativeElement.innerText )
  }

}
