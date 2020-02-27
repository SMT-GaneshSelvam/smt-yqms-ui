import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChecksheetsComponent } from './checksheets/checksheets.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheetsheetsFilterComponent } from './checksheets/cheetsheets-filter/cheetsheets-filter.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CheetsheetsGridComponent } from './checksheets/cheetsheets-grid/cheetsheets-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { PunchlistsComponent } from './punchlists/punchlists.component';
import { PunchlistsFilterComponent } from './punchlists/punchlists-filter/punchlists-filter.component';
import { PunchlistsGridComponent } from './punchlists/punchlists-grid/punchlists-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ChecksheetsComponent,
    CheetsheetsFilterComponent,
    CheetsheetsGridComponent,
    PunchlistsComponent,
    PunchlistsFilterComponent,
    PunchlistsGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeViewModule,
    FormsModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
