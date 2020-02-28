import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChecksheetsComponent } from './checksheets/checksheets.component';
import { PunchlistsComponent } from './punchlists/punchlists.component';
import { RfiComponent } from './rfi/rfi.component';

const routes: Routes = [
  { path: 'rfi', component: RfiComponent },
  { path: 'checksheets', component: ChecksheetsComponent },
  { path: 'punchlists', component: PunchlistsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
