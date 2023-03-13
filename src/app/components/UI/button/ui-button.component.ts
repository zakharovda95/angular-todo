import { Component, Input } from '@angular/core';
import { IUIButtonSettings, IUIButtonStyle } from '../../../models/UI/ui.model';

@Component({
  selector: 'UIButton',
  templateUrl: './ui-button.component.html',
})
export class UiButtonComponent {
  @Input() buttonSettings: IUIButtonSettings;
  @Input() buttonStyles: IUIButtonStyle;

  public get settings() {
    return {
      // backgrounds
      'bg-blue-600 active:bg-blue-700': this.buttonSettings.color === 'blue',
      'bg-[white]': this.buttonSettings.color === 'default',
      // color
      'text-gray-700': this.buttonSettings.textColor === 'dark',
      'text-white': this.buttonSettings.textColor === 'light',
      // shape
      'rounded-none': this.buttonSettings.shape === 'default',
      'rounded-md': this.buttonSettings.shape === 'slightly-rounded',
      'rounded-full': this.buttonSettings.shape === 'rounded',
    };
  }
}
