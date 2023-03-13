import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutsModule } from './components/layouts/layouts.module';
import { PagesModule } from './components/pages/pages.module';
import { UiModule } from './components/UI/ui.module';
import {MainPageModule} from "./components/pages/main/main-page.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutsModule, PagesModule, UiModule, MainPageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
