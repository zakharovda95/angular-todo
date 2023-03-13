import { Component } from '@angular/core';
import { IUIButtonSettings, IUIButtonStyle } from '../../../../models/UI/ui.model';

@Component({
  selector: 'DefaultHeader',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  AddButtonSettings: IUIButtonSettings = {
    color: 'blue',
    textColor: 'light',
    shape: 'rounded',
    buttonText: '+',
  };

  AddButtonStyle: IUIButtonStyle = {
    width: '60px',
    height: '60px',
    fontSize: '2rem',
  };
}
