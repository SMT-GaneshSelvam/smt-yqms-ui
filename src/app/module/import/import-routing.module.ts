import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportComponent } from './import/import.component';

const routes: Routes = [
  {
    path: "", component: ImportComponent
/*     children: [
      {
        path: 'database-hierarchy',
        loadChildren: './database-hierarchy/database-hierarchy.module#DatabaseHierarchyModule'
      }
    ] */
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportRoutingModule { }
