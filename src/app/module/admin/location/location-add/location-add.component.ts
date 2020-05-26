import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocationService } from '../resources/location.service';
import { forkJoin } from 'rxjs';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
import { ValidatorHelper } from 'src/app/module/shared/components/validators/custom.validator';

@Component({
  selector: 'app-location-add',
  templateUrl: './location-add.component.html',
  styleUrls: ['./location-add.component.scss']
})
export class LocationAddComponent implements OnInit {

    public addLocationForm: FormGroup;
    public pageLoaded = false;
    public submoduleList = [];
    public datatypeList = [];
    public displayType = [];
    private postData = {};
    serviceError: string = '';
    questionValidationFlag = false;
  
  
    constructor(private _router: Router, private _cd: ChangeDetectorRef, private locationService: LocationService) { }
  
    ngOnInit() {
  /*     let submodule = this.locationService.getAllSipCategory();
      let datatype = this.locationService.getAllDatatypes();
      let display = this.locationService.getDisplayType();
  
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
      this.addLocationForm = new FormGroup({
        id: new FormControl("", [Validators.required]),
        description: new FormControl("", [Validators.required]),
        addedAt: new FormControl("", ),
        addedBy: new FormControl("", ),
        imported: new FormControl(false),
        completed: new FormControl(false),
        verified: new FormControl(false),
        verifiedBy: new FormControl(""),
        verifiedResponsibleGroup: new FormControl(""),
        verifiedAt: new FormControl("")
      });
    }
  
    addLocation = () => {
      window.scrollTo(0, 0)
      if (this.addLocationForm.valid) {
        this.postData = {
          "id": this.addLocationForm.get('id').value,
          "description": this.addLocationForm.get('description').value,
          "addedAt": this.addLocationForm.get('addedAt').value,
          "addedBy": this.addLocationForm.get('addedBy').value,
          "imported": this.addLocationForm.get('imported').value? 1 : 0,
          "completed": this.addLocationForm.get('completed').value? 1 : 0,
          "verified": this.addLocationForm.get('verified').value? 1 : 0,
          "verifiedBy": this.addLocationForm.get('verifiedBy').value,
          "verifiedResponsibleGroup": this.addLocationForm.get('verifiedResponsibleGroup').value,
          "verifiedAt": this.addLocationForm.get('verifiedAt').value
        }
  
        this.locationService.commonPOSTCall(AppSettingsModule.location, this.postData).subscribe((data: any) => {
          this.locationService.alertMessage = 'Location added successfully';
          this._router.navigate(['/location']);
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
      this._router.navigate(['/location']);
    }
    public closeMsg = (msg) => {
      if(msg)
        this[msg] = null;
      this.questionValidationFlag = false;
    }
  }
  
  
  