import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UnitService } from '../resources/unit.service';
import { forkJoin } from 'rxjs';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
import { ValidatorHelper } from 'src/app/module/shared/components/validators/custom.validator';

@Component({
  selector: 'app-unit-edit',
  templateUrl: './unit-edit.component.html',
  styleUrls: ['./unit-edit.component.scss']
})
export class UnitEditComponent implements OnInit {

  editUnitForm: FormGroup;
  pageLoaded = false;
  submoduleList = [];
  datatypeList = [];
  displayType = [];
  editDetails;
  private postData = {};
  serviceError: string = '';
  questionValidationFlag = false;

  constructor(private _router: Router, private _cd: ChangeDetectorRef, private unitService: UnitService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(routeParams => {
      if (routeParams.id) {
        let unitId = routeParams.id;
        let getEditDetails = this.unitService.getUnitByID(unitId);

        forkJoin([getEditDetails]).subscribe((data: any) => {
          this.editDetails = data[0];
          this.initForm();
          this.pageLoaded = true;
          this._cd.detectChanges();
        },
          (err) => {
            this.pageLoaded = true;
            if (err.status == 500 || err.status == 400) {
              this.serviceError = err.error.message;
            }
            else if (err.status == 401) {
              this._router.navigate(['/login']);
            }
            if (!this.serviceError) {
              this.serviceError = "Oops!!! Something went wrong. Please contact the administrator.";
            }
          }
        );
      }
    });
  }

  private initForm = () => {

    this.editUnitForm = new FormGroup({
      id: new FormControl(this.editDetails.id, [Validators.required]),
      description: new FormControl(this.editDetails.description, [Validators.required]),
      imported: new FormControl(this.editDetails.imported),
      verified: new FormControl(this.editDetails.verified),
      verifiedBy: new FormControl(this.editDetails.verifiedBy),
      verifiedResponsibleGroup: new FormControl(this.editDetails.verifiedResponsibleGroup),
      verifiedAt: new FormControl(this.editDetails.verifiedAt),
      underMoC: new FormControl(this.editDetails.underMoC),
      preventAPC: new FormControl(this.editDetails.preventAPC),
      unitC1: new FormControl(this.editDetails.unitC1)
    });
  }

  editUnit = () => {
    window.scrollTo(0, 0)
    if (this.editUnitForm.valid) {
      this.postData = {
        "id": this.editUnitForm.get('id').value,
        "description": this.editUnitForm.get('description').value,
        "imported": this.editUnitForm.get('imported').value ? 1 : 0,
        "verified": this.editUnitForm.get('verified').value ? 1 : 0,
        "verifiedBy": this.editUnitForm.get('verifiedBy').value,
        "verifiedResponsibleGroup": this.editUnitForm.get('verifiedResponsibleGroup').value,
        "verifiedAt": this.editUnitForm.get('verifiedAt').value,
        "underMoC": this.editUnitForm.get('underMoC').value ? 1 : 0,
        "preventAPC": this.editUnitForm.get('preventAPC').value ? 1 : 0,
        "unitC1": this.editUnitForm.get('unitC1').value
      }

      this.unitService.commonPOSTCall(AppSettingsModule.unit, this.postData).subscribe((data: any) => {
        this.unitService.alertMessage = 'Unit updated successfully';
        this._router.navigate(['admin/unit']);
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
    this._router.navigate(['admin/unit']);
  }
  public closeMsg = (msg) => {
    if (msg)
      this[msg] = null;
    this.questionValidationFlag = false;
  }
}


