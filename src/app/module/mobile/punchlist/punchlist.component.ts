import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
import { HttpService } from 'src/app/core/services/http.service';
import { Punch } from '../resources/mobile.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-punchlist',
  templateUrl: './punchlist.component.html',
  styleUrls: ['./punchlist.component.scss']
})
export class PunchlistComponent implements OnInit {
  parameter: number;
  public lineNo;
  public checkSheet;
  public description;
  public punchListForm: FormGroup;


  constructor(
    private bsModalRef: BsModalRef,
    private translateService: TranslateService,
    private httpService: HttpService,
    private formBuilder: FormBuilder
  ) {
    this.punchListForm = this.formBuilder.group({
      name: [''],
      punchListArray: this.formBuilder.array([
         ])
    });
  }

  //punchList = [];



  ngOnInit() {

    this.httpService.get(AppSettingsModule.punchListitem + this.checkSheet + "/" + this.lineNo).subscribe((data: any) => {

     this.initForm();
     data.forEach((item, index) => {
      //this.punchList.push(new Punch(item.punchNo, item.description, '', ''));
      this.addPunchList(item.punchNo, item.description);
    });

    },
      (err) => {
      });
  }

  initForm = () => {

  }

  addPunchList(punchNo, description): void{
    (<FormArray>this.punchListForm.get('punchListArray')).push(this.addPunchListGroup(punchNo, description));
  }

  get punchListArray(): FormArray {
    return this.punchListForm.get('punchListArray') as FormArray;
  }

  addPunchListGroup(punchNo, description): FormGroup{
    return this.formBuilder.group({
      punchNo: punchNo,
      description: description,
      typeCode: '',
      category: '',
    });
  }

  confirm() {
    this.close();
  }

  close() {
    this.bsModalRef.hide();
  }

}


