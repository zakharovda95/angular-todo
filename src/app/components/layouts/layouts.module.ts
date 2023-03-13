import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { DefaultLayoutComponent } from './default/default-layout.component';
import { UiModule } from '../UI/ui.module';

@NgModule({
  declarations: [HeaderComponent, DefaultLayoutComponent],
  exports: [DefaultLayoutComponent],
  imports: [UiModule],
})
export class LayoutsModule {}
