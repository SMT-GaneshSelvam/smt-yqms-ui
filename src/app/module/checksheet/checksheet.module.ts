import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecksheetsComponent } from './checksheets.component';
import { Routes, RouterModule } from '@angular/router';
import { CheetsheetsFilterComponent } from './cheetsheets-filter/cheetsheets-filter.component';
import { CheetsheetsGridComponent } from './cheetsheets-grid/cheetsheets-grid.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

const routes: Routes = [
  { path: '', component: ChecksheetsComponent, data: [{ PageName: "Other" }], pathMatch:"full" }
];

@NgModule({
  declarations: [CheetsheetsFilterComponent,CheetsheetsGridComponent,ChecksheetsComponent],
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
export class ChecksheetModule { }




