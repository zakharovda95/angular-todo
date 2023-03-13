export interface IUIButtonSettings {
  color: 'default' | 'blue';
  shape: 'default' | 'slightly-rounded' | 'rounded';
  textColor: 'dark' | 'light';
  buttonText: string;
}

export interface IUIButtonStyle {
  [key: string]: string;
}
