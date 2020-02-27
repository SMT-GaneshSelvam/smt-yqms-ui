import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChecksheetsComponent } from './checksheets/checksheets.component';
import { PunchlistsComponent } from './punchlists/punchlists.component';

const routes: Routes = [
  { path: 'checksheets', component: ChecksheetsComponent },
  { path: 'punchlists', component: PunchlistsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
