import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeListComponent } from './type-list/type-list.component';
import { TypeAddComponent } from './type-add/type-add.component';
import { TypeEditComponent } from './type-edit/type-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

const routes: Routes = [
  { path: '', component: TypeListComponent},
  { path: 'add', component: TypeAddComponent},
  { path: 'edit/:id', component: TypeEditComponent}
];


@NgModule({
  declarations: [TypeListComponent, TypeAddComponent, TypeEditComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,    
    ReactiveFormsModule,
    FormsModule,
    AgGridModule.withComponents([])
  ]
})
export class TypeModule { }
