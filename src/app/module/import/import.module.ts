import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportComponent } from './import/import.component';
import { ImportRoutingModule } from './import-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { DatabaseHierarchyComponent } from './database-hierarchy/database-hierarchy/database-hierarchy.component';

@NgModule({
  declarations: [ImportComponent, DatabaseHierarchyComponent],
  imports: [
    ImportRoutingModule,
    CommonModule,    
    ReactiveFormsModule,
    FormsModule,
    AgGridModule.withComponents([])
  ]
})
export class ImportModule { }
