import { KanbanBoardComponent } from './kanban-board.component';
import { NgModule } from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [KanbanBoardComponent],
  imports: [
    MatGridListModule
  ],
  exports: [
    KanbanBoardComponent
  ]
})
export class KanbanBoardModule {}
