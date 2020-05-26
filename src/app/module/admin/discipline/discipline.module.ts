import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplineListComponent } from './discipline-list/discipline-list.component';
import { DisciplineAddComponent } from './discipline-add/discipline-add.component';
import { DisciplineEditComponent } from './discipline-edit/discipline-edit.component';

@NgModule({
  declarations: [DisciplineListComponent, DisciplineAddComponent, DisciplineEditComponent],
  imports: [
    CommonModule
  ]
})
export class DisciplineModule { }
