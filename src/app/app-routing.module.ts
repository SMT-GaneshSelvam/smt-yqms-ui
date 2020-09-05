import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './module/login-module/landing-page/login/login.component';
import { ChecksheetComponent } from './module/mobile/checksheet/checksheet.component';
import { MobileModule } from './module/mobile/mobile.module';

const routes: Routes = [
  { path: 'mobile', component: ChecksheetComponent, data: [{ PageName: "MobilePage" }] },
  { path: '', component: LoginComponent, data: [{ PageName: "LoginPage" }] },
  { path: 'myyqms', loadChildren: () => import('./module/my-yqms/my-yqms.module').then(m => m.MyYqmsModule), data: [{ PageName: "Other" }] },
  { path: 'dashboard', loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule), data: [{ PageName: "Other" }] },
  { path: 'checksheet', loadChildren: () => import('./module/checksheet/checksheet.module').then(m => m.ChecksheetModule), data: [{ PageName: "Other" }] },
  { path: 'punchlists', loadChildren: () => import('./module/punchlists/punchlist.module').then(m => m.PunchlistModule), data: [{ PageName: "Other" }] },
  { path: 'rfi', loadChildren: () => import('./module/rfi/rfi.module').then(m => m.RfiModule), data: [{ PageName: "Other" }] },
  { path: 'tagdatabase', loadChildren: () => import('./module/tag-database/tag-database.module').then(m => m.TagDatabaseModule), data: [{ PageName: "Other" }] },
  { path: 'workpacks', loadChildren: () => import('./module/workpacks/workpacks.module').then(m => m.WorkpacksModule), data: [{ PageName: "Other" }] },
  { path: 'admin', loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule), data: [{ PageName: "Other" }] },
  { path: 'import', loadChildren: () => import('./module/import/import.module').then(m => m.ImportModule), data: [{ PageName: "Other" }]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes),MobileModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
