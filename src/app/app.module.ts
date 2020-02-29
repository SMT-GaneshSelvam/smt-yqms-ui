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
import { RfiComponent } from './rfi/rfi.component';
import { RfiFilterComponent } from './rfi/rfi-filter/rfi-filter.component';
import { RfiGridComponent } from './rfi/rfi-grid/rfi-grid.component';
import { TagDatabaseComponent } from './tag-database/tag-database.component';
import { TagDatabaseFilterComponent } from './tag-database/tag-database-filter/tag-database-filter.component';
import { TagDatabaseGridComponent } from './tag-database/tag-database-grid/tag-database-grid.component';
import { WorkpacksComponent } from './workpacks/workpacks.component';
import { WorkpacksFilterComponent } from './workpacks/workpacks-filter/workpacks-filter.component';
import { WorkpacksGridComponent } from './workpacks/workpacks-grid/workpacks-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ChecksheetsComponent,
    CheetsheetsFilterComponent,
    CheetsheetsGridComponent,
    PunchlistsComponent,
    PunchlistsFilterComponent,
    PunchlistsGridComponent,
    RfiComponent,
    RfiFilterComponent,
    RfiGridComponent,
    TagDatabaseComponent,
    TagDatabaseFilterComponent,
    TagDatabaseGridComponent,
    WorkpacksComponent,
    WorkpacksFilterComponent,
    WorkpacksGridComponent
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
