import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    AdminRoutingModule,
    CommonModule,    
    ReactiveFormsModule,
    FormsModule,
    AgGridModule.withComponents([])
  ]
})
export class AdminModule { }
