import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagDatabaseComponent } from './tag-database.component';
import { Routes, RouterModule } from '@angular/router';
import { TagDatabaseFilterComponent } from './tag-database-filter/tag-database-filter.component';
import { TagDatabaseGridComponent } from './tag-database-grid/tag-database-grid.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

const routes: Routes = [
  { path: '', component: TagDatabaseComponent, data: [{ PageName: "Other" }], pathMatch:"full" }
];

@NgModule({
  declarations: [TagDatabaseFilterComponent,TagDatabaseGridComponent,TagDatabaseComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    TreeViewModule,
  ]
})
export class TagDatabaseModule { }
