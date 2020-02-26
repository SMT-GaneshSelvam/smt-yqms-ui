import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChecksheetsComponent } from './checksheets/checksheets.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheetsheetsFilterComponent } from './cheetsheets-filter/cheetsheets-filter.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CheetsheetsGridComponent } from './cheetsheets-grid/cheetsheets-grid.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    ChecksheetsComponent,
    CheetsheetsFilterComponent,
    CheetsheetsGridComponent
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
