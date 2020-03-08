import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WorkpacksComponent } from './workpacks.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { WorkpacksGridComponent } from './workpacks-grid/workpacks-grid.component';
import { WorkpacksFilterComponent } from './workpacks-filter/workpacks-filter.component';

const routes: Routes = [
  { path: '', component: WorkpacksComponent, data: [{ PageName: "Other" }], pathMatch:"full" }
];


@NgModule({
  declarations: [WorkpacksFilterComponent,WorkpacksGridComponent,WorkpacksComponent],
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
export class WorkpacksModule { }
