import { Component, OnInit, TemplateRef } from '@angular/core';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { PunchlistComponent } from '../punchlist/punchlist.component';
import { HttpService } from 'src/app/core/services/http.service';
import { Check, MobileService } from '../resources/mobile.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checksheet',
  templateUrl: './checksheet.component.html',
  styleUrls: ['./checksheet.component.scss']
})
export class ChecksheetComponent implements OnInit {

  public initialConfig = {};
  bsModalRef: BsModalRef;
  checkSheet: String = 'E22A';
  checks: Array<any>;

  categories:Array<any> = [];
  totalChecks = [];
  categoryCursor = 0;
  cursor = 0;
  checkSheetForm: FormGroup;

  constructor(
    private httpService: HttpService, 
    private modalService: BsModalService,
    private mobileService: MobileService,
    private formBuilder: FormBuilder,) { }

  ngOnInit() {

    this.initForm();

  }

  initForm = () => {

    this.checkSheetForm = this.formBuilder.group({
      checkListArray: this.formBuilder.array([
      ])
    });

    this.httpService.get(AppSettingsModule.checkSheetItem + 'E22A').subscribe((data: any) => {

      let group = "";
      data.forEach((item, index) => {
        if (group!==item.group){
          this.totalChecks.push(new Check(item.group, 0, '', false, false, false));
        }
        group=item.group;
        this.totalChecks.push(new Check(item.group, item.lineNo, item.description, false, false, false));        
      });

      let item = this.totalChecks[this.cursor];        
      this.addCheckList(item.group, item.lineNo, item.description, item.yes, item.no, item.na);
      item = this.totalChecks[++this.cursor];   
      this.addCheckList(item.group, item.lineNo, item.description, item.yes, item.no, item.na);
    },
      (err) => {
      });
      
  }

  addCheckList(group, lineNo, description, yes, no, na): void {
    (<FormArray>this.checkSheetForm.get('checkListArray')).push(this.addCheckListGroup(group, lineNo, description, yes, no, na));
  }

  get checkListArray(): FormArray {
    return this.checkSheetForm.get('checkListArray') as FormArray;
  }

  addCheckListGroup(group, lineNo, description, yes, no, na): FormGroup {
    return this.formBuilder.group({
      group: group,
      lineNo: lineNo,
      description: description,
      yes: yes,
      no: no,
      na: na
    });
  }



  pushNext(){
    
    let item = this.totalChecks[++this.cursor];        
    this.addCheckList(item.group, item.lineNo, item.description, item.yes, item.no, item.na);

    if((this.totalChecks[this.cursor].lineNo==0)){
      item = this.totalChecks[++this.cursor];
      this.addCheckList(item.group, item.lineNo, item.description, item.yes, item.no, item.na); 
    }

  }

  viewPunchList(lineNo, description) {

    const initialState = {
      lineNo: lineNo,
      checkSheet: this.checkSheet,
      description: description

  };
  this.bsModalRef = this.modalService.show(PunchlistComponent, {initialState});
  this.bsModalRef.content.closeBtnName = 'Close';
  this.bsModalRef.setClass('modal-lg');

}

saveCheckSheet (){

  console.log("SMT");

  this.mobileService.punchListMap.forEach((item,index)=>{
    console.log(item);
  });

  let checkList:Check[] = [];

  this.checkListArray.controls.forEach((item, index) => {
    let check = new Check(item.value.group, item.value.lineNo, item.value.description, item.value.yes, item.value.no, item.value.na );
    checkList.push(check);
  });

  console.log(checkList);

  this.close();

}

close(){
}

}

