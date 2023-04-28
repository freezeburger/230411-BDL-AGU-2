import { Component , ContentChildren , QueryList,AfterContentInit} from '@angular/core';
import { UiLayoutContentComponent } from '../ui-layout-content/ui-layout-content.component';

@Component({
  selector: 'bdl-ui-layout',
  templateUrl: './ui-layout.component.html',
  styleUrls: ['./ui-layout.component.css']
})
export class UiLayoutComponent implements AfterContentInit {

  @ContentChildren(UiLayoutContentComponent) contents!:QueryList<UiLayoutContentComponent>;

  ngAfterContentInit(): void {
    if(this.contents.length < 1 ) console.log('%c You should have at least one "layout-content" ', 'color:hotPink;font-size:30px')
  }


}
