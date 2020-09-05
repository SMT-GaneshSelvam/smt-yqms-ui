import { Component, OnInit, TemplateRef } from '@angular/core';
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



  checks: Array<any>;

  categories:Array<any> = [];

  totalCategories = ["IDENTIFICATION","INSTALLATION","ENVIRONMENT"];



  totalChecks = [];


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



  viewPunchList(id) {

    const initialState = {
      parameter: 2019,
  };
  this.bsModalRef = this.modalService.show(PunchlistComponent, {initialState});
  this.bsModalRef.content.closeBtnName = 'Close';

}



}

export class check {
  constructor(
    public group: string,
    public lineNo: number,
    public description: string) { }
}

