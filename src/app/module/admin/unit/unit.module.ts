import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UnitListComponent } from './unit-list/unit-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { UnitAddComponent } from './unit-add/unit-add.component';
import { UnitEditComponent } from './unit-edit/unit-edit.component';


const routes: Routes = [
  { path: '', component: UnitListComponent},
  { path: 'add', component: UnitAddComponent},
  { path: 'edit/:id', component: UnitEditComponent}
];


@NgModule({
  declarations: [UnitListComponent, UnitAddComponent, UnitEditComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,    
    ReactiveFormsModule,
    FormsModule,
    AgGridModule.withComponents([])
  ]
})
export class UnitModule { }
