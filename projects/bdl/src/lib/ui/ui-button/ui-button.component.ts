import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, HostListener, Input } from '@angular/core';
import { UiButtonOptionsComponent } from '../ui-button-options/ui-button-options.component';

@Component({
  selector: 'bdl-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiButtonComponent implements AfterContentInit{

  @Input() disabled = false;
  @Input() level: UiButtonLevel = 'ACTION';

  @ContentChild(UiButtonOptionsComponent) options:UiButtonOptionsComponent | null = null;

  constructor(
    private element: ElementRef,
  ) {}

  ngAfterContentInit(): void {
   if(this.options) this.element.nativeElement.querySelector('bdl-ui-button-options').style.display = 'none';
  }

  @HostListener('mouseenter')
  private showOptions(){
    if(this.options) this.element.nativeElement.querySelector('bdl-ui-button-options').style.display = 'block';
  }
  @HostListener('mouseleave')
  private hideOptions(){
    if(this.options) this.element.nativeElement.querySelector('bdl-ui-button-options').style.display = 'none';
  }


}

export type UiButtonLevel = 'ACTION' | 'CONFIG' | 'CANCEL';


