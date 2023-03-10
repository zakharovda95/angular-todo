import { NgModule } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { DefaultLayoutComponent } from './default-layout.component';

@NgModule({
  declarations: [HeaderComponent, DefaultLayoutComponent],
  exports: [
    DefaultLayoutComponent
  ]
})
export class DefaultLayoutModule {}
