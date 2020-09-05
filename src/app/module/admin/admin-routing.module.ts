import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: "", component: LayoutComponent
  },
  {
    path: 'unit',
    loadChildren: () => import('./unit/unit.module').then(m => m.UnitModule),
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then(m => m.LocationModule),
  },
  {
    path: 'type',
    loadChildren: () => import('./type/type.module').then(m => m.TypeModule),
  },
  {
    path: 'discipline',
    loadChildren: () => import('./discipline/discipline.module').then(m => m.DisciplineModule),
  },
  {
    path: 'tagGroup',
    loadChildren: () => import('./tag-group/tag-group.module').then(m => m.TagGroupModule),
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
