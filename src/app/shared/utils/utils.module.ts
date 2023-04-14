import { NgModule } from '@angular/core';
import { NgImportModule } from '../ng-import.module';
import { RetractedDirective } from './retracted.directive';
import { UiImageEmphasisDirective } from './ui-image-emphasis.directive';
import { UiImageFallbackDirective } from './ui-image-fallback.directive';



@NgModule({
  declarations: [
    RetractedDirective,
    UiImageEmphasisDirective,
    UiImageFallbackDirective
  ],
  imports: [
    NgImportModule
  ],
  exports: [
    RetractedDirective,
    UiImageEmphasisDirective,
    UiImageFallbackDirective
  ]
})
export class UtilsModule { }
