import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RfiFilterComponent } from './rfi-filter/rfi-filter.component';
import { RfiGridComponent } from './rfi-grid/rfi-grid.component';
import { RfiComponent } from './rfi.component';
import { Routes, RouterModule } from '@angular/router';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

const routes: Routes = [
  { path: '', component: RfiComponent, data: [{ PageName: "Other" }], pathMatch:"full" }
];

@NgModule({
  declarations: [RfiFilterComponent,RfiGridComponent,RfiComponent],
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
export class RfiModule { }
