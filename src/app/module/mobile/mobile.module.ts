import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecksheetComponent } from './checksheet/checksheet.component';
import { Routes, RouterModule } from '@angular/router';
import { PunchlistComponent } from './punchlist/punchlist.component';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [ChecksheetComponent, PunchlistComponent],
  imports: [
    ModalModule.forRoot(),
    CommonModule

  ],
  entryComponents: [
    PunchlistComponent
  ],
  providers: [
    BsModalRef
] 
})
export class MobileModule { }
