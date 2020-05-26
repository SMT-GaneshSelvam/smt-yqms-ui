import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UnitService } from '../resources/unit.service';
import { forkJoin } from 'rxjs';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
import { ValidatorHelper } from 'src/app/module/shared/components/validators/custom.validator';

@Component({
  selector: 'app-unit-add',
  templateUrl: './unit-add.component.html',
  styleUrls: ['./unit-add.component.scss']
})

export class UnitAddComponent implements OnInit {
  public addUnitForm: FormGroup;
  public pageLoaded = false;
  public submoduleList = [];
  public datatypeList = [];
  public displayType = [];
  private postData = {};
  serviceError: string = '';
  questionValidationFlag = false;


  constructor(private _router: Router, private _cd: ChangeDetectorRef, private unitService: UnitService) { }

  ngOnInit() {
/*     let submodule = this.unitService.getAllSipCategory();
    let datatype = this.unitService.getAllDatatypes();
    let display = this.unitService.getDisplayType();

    forkJoin([submodule, datatype, display]).subscribe((data: any) => {
      this.submoduleList = data[0];
      this.submoduleList.sort((obj1: any, obj2: any) => {
        return obj1.sipName.localeCompare(obj2.sipName);

      }) */

      //this.datatypeList = data[1];
      //this.displayType = filterDisplayTypes(data[2]);
      this.initForm();
      this.pageLoaded = true;
      this._cd.detectChanges();
/*     },
      (err) => {
        if (err.status == 401) {
          this._router.navigate(['/login']);
        }
        if(!this.serviceError){
              this.serviceError = "Oops!!! Something went wrong. Please contact the administrator.";
        }
      }
    ); */
  }

  initForm = () => {
    this.addUnitForm = new FormGroup({
      id: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      imported: new FormControl(false),
      verified: new FormControl(false),
      verifiedBy: new FormControl(""),
      verifiedResponsibleGroup: new FormControl(""),
      verifiedAt: new FormControl(""),
      underMoC: new FormControl(""),
      preventAPC: new FormControl(""),
      unitC1: new FormControl("")
    });
  }

  addUnit = () => {
    window.scrollTo(0, 0)
    if (this.addUnitForm.valid) {
      this.postData = {
        "id": this.addUnitForm.get('id').value,
        "description": this.addUnitForm.get('description').value,
        "imported": this.addUnitForm.get('imported').value? 1 : 0,
        "verified": this.addUnitForm.get('verified').value? 1 : 0,
        "verifiedBy": this.addUnitForm.get('verifiedBy').value,
        "verifiedResponsibleGroup": this.addUnitForm.get('verifiedResponsibleGroup').value,
        "verifiedAt": this.addUnitForm.get('verifiedAt').value,
        "underMoC": this.addUnitForm.get('underMoC').value? 1 : 0,
        "preventAPC": this.addUnitForm.get('preventAPC').value? 1 : 0,
        "unitC1": this.addUnitForm.get('unitC1').value
      }

      this.unitService.commonPOSTCall(AppSettingsModule.unit, this.postData).subscribe((data: any) => {
        this.unitService.alertMessage = 'Unit added successfully';
        this._router.navigate(['/unit']);
      },
        (err) => {
          if (err.status == 500 || err.status == 400) {
            this.serviceError = err.error.message;
          }
          else if (err.status == 401) {
            this._router.navigate(['/login']);
          }
        }
      );
    } else {
      this.questionValidationFlag = true;
    }
    window.scrollTo(0, 0)
  }



  private navigateBack = () => {
    this._router.navigate(['/unit']);
  }
  public closeMsg = (msg) => {
    if(msg)
      this[msg] = null;
    this.questionValidationFlag = false;
  }
}


