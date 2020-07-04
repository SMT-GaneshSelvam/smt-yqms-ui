import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: "", component: LayoutComponent
  },
  {
    path: 'unit',
    loadChildren: './unit/unit.module#UnitModule',
  },
  {
    path: 'location',
    loadChildren: './location/location.module#LocationModule',
  },
  {
    path: 'type',
    loadChildren: './type/type.module#TypeModule',
  },
  {
    path: 'discipline',
    loadChildren: './discipline/discipline.module#DisciplineModule',
  },
  {
    path: 'tagGroup',
    loadChildren: './tag-group/tag-group.module#TagGroupModule',
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
