import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PunchlistsComponent } from './punchlists.component';
import { PunchlistsFilterComponent } from './punchlists-filter/punchlists-filter.component';
import { PunchlistsGridComponent } from './punchlists-grid/punchlists-grid.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

const routes: Routes = [
  { path: '', component: PunchlistsComponent, data: [{ PageName: "Other" }], pathMatch:"full" }
];

@NgModule({
  declarations: [PunchlistsFilterComponent,PunchlistsGridComponent,PunchlistsComponent],
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
export class PunchlistModule { }
