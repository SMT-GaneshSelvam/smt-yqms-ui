import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChecksheetsComponent } from './checksheets/checksheets.component';
import { PunchlistsComponent } from './punchlists/punchlists.component';
import { RfiComponent } from './rfi/rfi.component';
import { TagDatabaseComponent } from './tag-database/tag-database.component';
import { WorkpacksComponent } from './workpacks/workpacks.component';

const routes: Routes = [
  { path: 'tagdatabase', component: TagDatabaseComponent },
  { path: 'workpacks', component: WorkpacksComponent },
  { path: 'rfi', component: RfiComponent },
  { path: 'checksheets', component: ChecksheetsComponent },
  { path: 'punchlists', component: PunchlistsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
