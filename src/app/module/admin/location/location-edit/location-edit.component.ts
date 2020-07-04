import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocationService } from '../resources/location.service';
import { forkJoin } from 'rxjs';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
import { ValidatorHelper } from 'src/app/module/shared/components/validators/custom.validator';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.scss']
})
export class LocationEditComponent implements OnInit {

    editLocationForm: FormGroup;
    pageLoaded = false;
    submoduleList = [];
    datatypeList = [];
    displayType = [];
    editDetails;
    private postData = {};
    serviceError: string = '';
    questionValidationFlag = false;
  
    constructor(private _router: Router, private _cd: ChangeDetectorRef, private locationService: LocationService, private activatedRoute: ActivatedRoute) { }
  
    ngOnInit() {
      this.activatedRoute.params.subscribe(routeParams => {
        if (routeParams.id) {
          let locationId = routeParams.id;
          let getEditDetails = this.locationService.getLocationByID(locationId);
  
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
  
      this.editLocationForm = new FormGroup({
        id: new FormControl(this.editDetails.id, [Validators.required]),
        description: new FormControl(this.editDetails.description, [Validators.required]),
        addedAt: new FormControl(this.editDetails.addedAt),
        addedBy: new FormControl(this.editDetails.addedBy),
        completed: new FormControl(this.editDetails.completed),
        imported: new FormControl(this.editDetails.imported),
        verified: new FormControl(this.editDetails.verified),
        verifiedBy: new FormControl(this.editDetails.verifiedBy),
        verifiedResponsibleGroup: new FormControl(this.editDetails.verifiedResponsibleGroup),
        verifiedAt: new FormControl(this.editDetails.verifiedAt)
      });
    }
  
    editLocation = () => {
      window.scrollTo(0, 0)
      if (this.editLocationForm.valid) {
        this.postData = {
          "id": this.editLocationForm.get('id').value,
          "description": this.editLocationForm.get('description').value,
          "addedAt": this.editLocationForm.get('addedAt').value,
          "addedBy": this.editLocationForm.get('addedBy').value,
          "completed": this.editLocationForm.get('completed').value ? 1 : 0,
          "imported": this.editLocationForm.get('imported').value ? 1 : 0,
          "verified": this.editLocationForm.get('verified').value ? 1 : 0,
          "verifiedBy": this.editLocationForm.get('verifiedBy').value,
          "verifiedResponsibleGroup": this.editLocationForm.get('verifiedResponsibleGroup').value,
          "verifiedAt": this.editLocationForm.get('verifiedAt').value
        }
  
        this.locationService.commonPOSTCall(AppSettingsModule.location, this.postData).subscribe((data: any) => {
          this.locationService.alertMessage = 'Location updated successfully';
          this._router.navigate(['admin/location']);
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
      this._router.navigate(['admin/location']);
    }
    public closeMsg = (msg) => {
      if (msg)
        this[msg] = null;
      this.questionValidationFlag = false;
    }
  }
  
  
  