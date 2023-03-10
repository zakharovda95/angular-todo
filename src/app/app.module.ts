import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ListModule } from './components/pages/main/list/list.module';
import { LayoutsModule } from './components/layouts/layouts.module';
import {DefaultLayoutModule} from "./components/layouts/default/default-layout.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule, ListModule, LayoutsModule, DefaultLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
