import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecksheetComponent } from './checksheet/checksheet.component';
import { Routes, RouterModule } from '@angular/router';
import { PunchlistComponent } from './punchlist/punchlist.component';


@NgModule({
  declarations: [ChecksheetComponent, PunchlistComponent],
  imports: [
    CommonModule
  ]
})
export class MobileModule { }
