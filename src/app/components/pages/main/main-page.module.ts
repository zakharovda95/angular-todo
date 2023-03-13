import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { NgModule } from '@angular/core';
import { KanbanBoardItemComponent } from './kanban-board-item/kanban-board-item.component';

@NgModule({
  declarations: [KanbanBoardComponent, KanbanBoardItemComponent],
  exports: [KanbanBoardComponent, KanbanBoardItemComponent],
})
export class MainPageModule {}
