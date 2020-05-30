import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplineListComponent } from './discipline-list/discipline-list.component';
import { DisciplineAddComponent } from './discipline-add/discipline-add.component';
import { DisciplineEditComponent } from './discipline-edit/discipline-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

const routes: Routes = [
  { path: '', component: DisciplineListComponent},
  { path: 'add', component: DisciplineAddComponent},
  { path: 'edit/:id', component: DisciplineEditComponent}
];


@NgModule({
  declarations: [DisciplineListComponent, DisciplineAddComponent, DisciplineEditComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,    
    ReactiveFormsModule,
    FormsModule,
    AgGridModule.withComponents([])
  ]
})
export class DisciplineModule { }
