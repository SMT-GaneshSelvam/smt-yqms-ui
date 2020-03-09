import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './module/login-module/landing-page/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent, data: [{ PageName: "LoginPage" }] },
  { path: 'myyqms', loadChildren: './module/my-yqms/my-yqms.module#MyYqmsModule', data: [{ PageName: "Other" }] },
  { path: 'dashboard', loadChildren: './module/dashboard/dashboard.module#DashboardModule', data: [{ PageName: "Other" }] },
  { path: 'checksheet', loadChildren: './module/checksheet/checksheet.module#ChecksheetModule', data: [{ PageName: "Other" }] },
  { path: 'punchlists', loadChildren: './module/punchlists/punchlist.module#PunchlistModule', data: [{ PageName: "Other" }] },
  { path: 'rfi', loadChildren: './module/rfi/rfi.module#RfiModule', data: [{ PageName: "Other" }] },
  { path: 'tagdatabase', loadChildren: './module/tag-database/tag-database.module#TagDatabaseModule', data: [{ PageName: "Other" }] },
  { path: 'workpacks', loadChildren: './module/workpacks/workpacks.module#WorkpacksModule', data: [{ PageName: "Other" }] },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
