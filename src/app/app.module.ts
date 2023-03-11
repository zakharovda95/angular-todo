import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutsModule } from './components/layouts/layouts.module';
import { DefaultLayoutModule } from './components/layouts/default/default-layout.module';
import { KanbanBoardModule } from './components/pages/main/kanban-board/kanban-board.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutsModule, DefaultLayoutModule, KanbanBoardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
