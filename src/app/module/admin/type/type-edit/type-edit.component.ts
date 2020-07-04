import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TypeService } from '../resources/type.service';
import { forkJoin } from 'rxjs';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
import { ValidatorHelper } from 'src/app/module/shared/components/validators/custom.validator';

@Component({
  selector: 'app-type-edit',
  templateUrl: './type-edit.component.html',
  styleUrls: ['./type-edit.component.scss']
})
export class TypeEditComponent implements OnInit {
  
    editTypeForm: FormGroup;
    pageLoaded = false;
    submoduleList = [];
    datatypeList = [];
    displayType = [];
    editDetails;
    private postData = {};
    serviceError: string = '';
    questionValidationFlag = false;
  
    constructor(private _router: Router, private _cd: ChangeDetectorRef, private typeService: TypeService, private activatedRoute: ActivatedRoute) { }
  
    ngOnInit() {
      this.activatedRoute.params.subscribe(routeParams => {
        if (routeParams.id) {
          let typeId = routeParams.id;
          let getEditDetails = this.typeService.getTypeByID(typeId);
  
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
  
      this.editTypeForm = new FormGroup({
        id: new FormControl(this.editDetails.id, [Validators.required]),
        description: new FormControl(this.editDetails.description, [Validators.required])
      });
    }
  
    editType = () => {
      window.scrollTo(0, 0)
      if (this.editTypeForm.valid) {
        this.postData = {
          "id": this.editTypeForm.get('id').value,
          "description": this.editTypeForm.get('description').value
        }
  
        this.typeService.commonPOSTCall(AppSettingsModule.type, this.postData).subscribe((data: any) => {
          this.typeService.alertMessage = 'Type updated successfully';
          this._router.navigate(['admin/type']);
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
      this._router.navigate(['admin/type']);
    }
    public closeMsg = (msg) => {
      if (msg)
        this[msg] = null;
      this.questionValidationFlag = false;
    }
  }
  
  
  