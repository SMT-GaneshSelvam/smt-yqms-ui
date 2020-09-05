import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecksheetComponent } from './checksheet/checksheet.component';
import { Routes, RouterModule } from '@angular/router';
import { PunchlistComponent } from './punchlist/punchlist.component';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ChecksheetComponent, PunchlistComponent],
  imports: [
    ModalModule.forRoot(),
    TranslateModule.forRoot(),
    CommonModule

  ],
  entryComponents: [
    PunchlistComponent
  ],
  providers: [
    BsModalRef
],
exports: [
  //...
  TranslateModule
], 
})
export class MobileModule { }
