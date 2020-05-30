import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagGroupListComponent } from './tag-group-list/tag-group-list.component';
import { TagGroupAddComponent } from './tag-group-add/tag-group-add.component';
import { TagGroupEditComponent } from './tag-group-edit/tag-group-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

const routes: Routes = [
  { path: '', component: TagGroupListComponent},
  { path: 'add', component: TagGroupAddComponent},
  { path: 'edit/:id', component: TagGroupEditComponent}
];


@NgModule({
  declarations: [TagGroupListComponent, TagGroupAddComponent, TagGroupEditComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,    
    ReactiveFormsModule,
    FormsModule,
    AgGridModule.withComponents([])
  ]
})
export class TagGroupModule { }
