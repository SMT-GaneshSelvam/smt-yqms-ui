import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyYqmsComponent } from './my-yqms.component';
import { Routes, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

const routes: Routes = [
  { path: '', component: MyYqmsComponent, data: [{ PageName: "Other" }], pathMatch:"full" }
];


@NgModule({
  declarations: [MyYqmsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([])
  ]
})
export class MyYqmsModule { }
