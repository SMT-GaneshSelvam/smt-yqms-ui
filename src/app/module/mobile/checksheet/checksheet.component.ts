import { Component, OnInit } from '@angular/core';
import { CheckSheetService } from '../resources/checksheet.service';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PunchlistComponent } from '../punchlist/punchlist.component';

@Component({
  selector: 'app-checksheet',
  templateUrl: './checksheet.component.html',
  styleUrls: ['./checksheet.component.scss']
})
export class ChecksheetComponent implements OnInit {

  public initialConfig = {};
  bsModalRef: BsModalRef;

  punchListVisible = false

  checks: Array<any>;

  categories:Array<any> = [];

  totalCategories = ["IDENTIFICATION","INSTALLATION","ENVIRONMENT"];

  punchList = [];

  totalChecks = [];

  punchLists = [[
    new punch(1, 'desc1','typecode1','cate1'),
    new punch(2, 'desc2','typecode2','cate2'),
    new punch(3, 'desc3','typecode3','cate3'),
    new punch(4, 'desc4','typecode4','cate4')  
  ],[
    new punch(1, 'desc5','typecode1','cate1'),
    new punch(2, 'desc6','typecode2','cate2'),
    new punch(3, 'desc7','typecode3','cate3'),
    new punch(4, 'desc8','typecode4','cate4') 
  ],[
    new punch(1, 'desc9','typecode1','cate1'),
    new punch(2, 'desc10','typecode2','cate2'),
    new punch(3, 'desc11','typecode3','cate3'),
    new punch(4, 'desc12','typecode4','cate4') 
  ],[
    new punch(1, 'desc13','typecode1','cate1'),
    new punch(2, 'desc14','typecode2','cate2'),
    new punch(3, 'desc15','typecode3','cate3'),
    new punch(4, 'desc16','typecode4','cate4') 
  ]];

  categoryCursor = 0;
  cursor = 0;




  constructor(private checksheetService: CheckSheetService, private modalService: BsModalService) { }

  ngOnInit() {

    this.checksheetService.commonGETCall(AppSettingsModule.checkSheetItem + 'E22A').subscribe((data: any) => {

      var group = "";
      data.forEach((item, index) => {
        if (group!==item.group){
          this.totalChecks.push(new check(item.group, 0, ''));
        }
        group=item.group;
        this.totalChecks.push(new check(item.group, item.lineNo, item.description));        
      });
      this.checks = [];
      this.checks.push(this.totalChecks[this.cursor]);
      this.checks.push(this.totalChecks[++this.cursor]);
    },
      (err) => {
      });


  }

  pushNext(){
    
    this.checks.push(this.totalChecks[++this.cursor]); 

    if((this.totalChecks[this.cursor].lineNo==0)){
      this.checks.push(this.totalChecks[++this.cursor]); 
    }

  }

  showPunchList(checkIndex){
    this.punchListVisible = true;
    this.punchList = this.punchLists[checkIndex];
  }

  viewPunchList(id) {
    this.initialConfig = {
      initialState: {
        title: 'Punch List'
      },
      ignoreBackdropClick: true,
      backdrop: true,
      class: 'gray modal-lg modal-dialog'
    };
    this.bsModalRef = this.modalService.show(PunchlistComponent, Object.assign({}, this.initialConfig)).
      content.action.subscribe((value) => {
      }, err => {
      });
  }

}

export class check {
  constructor(
    public group: string,
    public lineNo: number,
    public description: string) { }
}

export class punch {
  constructor(
    public id: number,
    public description: string,
    public typeCode: string,
    public category: string,
    ) { }
}
