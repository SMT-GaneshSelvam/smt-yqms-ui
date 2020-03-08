import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AgGridModule } from 'ag-grid-angular';
import { LandingPageComponent } from './module/login-module/landing-page/landing-page.component';
import { LoginComponent } from './module/login-module/landing-page/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeViewModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
