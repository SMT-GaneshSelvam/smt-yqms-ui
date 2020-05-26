import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationAddComponent } from './location-add/location-add.component';
import { LocationEditComponent } from './location-edit/location-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

const routes: Routes = [
  { path: '', component: LocationListComponent},
  { path: 'add', component: LocationAddComponent},
  { path: 'edit/:id', component: LocationEditComponent}
];

@NgModule({
  declarations: [LocationListComponent, LocationAddComponent, LocationEditComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,    
    ReactiveFormsModule,
    FormsModule,
    AgGridModule.withComponents([])
  ]
})
export class LocationModule { }
