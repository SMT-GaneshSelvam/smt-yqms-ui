import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: "", component: LayoutComponent
  },
  {
    path: 'unit',
    loadChildren: './module/admin/unit/unit.module#UnitModule',
  },
  {
    path: 'location',
    loadChildren: './module/admin/location/location.module#LocationModule',
  },
  {
    path: 'type',
    loadChildren: './module/admin/type/type.module#TypeModule',
  },
  {
    path: 'discipline',
    loadChildren: './module/admin/discipline/discipline.module#DisciplineModule',
  },
  {
    path: 'tagGroup',
    loadChildren: './module/admin/tag-group/tag-group.module#TagGroupModule',
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
