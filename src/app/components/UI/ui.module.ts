import { NgModule } from '@angular/core';
import { UiButtonComponent } from './button/ui-button.component';
import { NgClass, NgStyle } from '@angular/common';

@NgModule({
  declarations: [UiButtonComponent],
  exports: [UiButtonComponent],
  imports: [NgStyle, NgClass],
})
export class UiModule {}
