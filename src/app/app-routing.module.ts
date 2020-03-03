import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChecksheetsComponent } from './checksheets/checksheets.component';
import { PunchlistsComponent } from './punchlists/punchlists.component';
import { RfiComponent } from './rfi/rfi.component';
import { TagDatabaseComponent } from './tag-database/tag-database.component';
import { WorkpacksComponent } from './workpacks/workpacks.component';
import { LoginComponent } from './module/login-module/landing-page/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent, data: [{ PageName: "LoginPage" }] },
  { path: 'tagdatabase', component: TagDatabaseComponent, data: [{ PageName: "Other" }] },
  { path: 'workpacks', component: WorkpacksComponent, data: [{ PageName: "Other" }] },
  { path: 'rfi', component: RfiComponent, data: [{ PageName: "Other" }] },
  { path: 'checksheets', component: ChecksheetsComponent, data: [{ PageName: "Other" }] },
  { path: 'punchlists', component: PunchlistsComponent, data: [{ PageName: "Other" }] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
