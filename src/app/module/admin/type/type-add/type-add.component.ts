import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TypeService } from '../resources/type.service';
import { forkJoin } from 'rxjs';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
import { ValidatorHelper } from 'src/app/module/shared/components/validators/custom.validator';

@Component({
  selector: 'app-type-add',
  templateUrl: './type-add.component.html',
  styleUrls: ['./type-add.component.scss']
})
export class TypeAddComponent implements OnInit {

    public addTypeForm: FormGroup;
    public pageLoaded = false;
    public submoduleList = [];
    public datatypeList = [];
    public displayType = [];
    private postData = {};
    serviceError: string = '';
    questionValidationFlag = false;
  
  
    constructor(private _router: Router, private _cd: ChangeDetectorRef, private typeService: TypeService) { }
  
    ngOnInit() {
  /*     let submodule = this.typeService.getAllSipCategory();
      let datatype = this.typeService.getAllDatatypes();
      let display = this.typeService.getDisplayType();
  
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
      this.addTypeForm = new FormGroup({
        id: new FormControl("", [Validators.required]),
        description: new FormControl("", [Validators.required])
      });
    }
  
    addType = () => {
      window.scrollTo(0, 0)
      if (this.addTypeForm.valid) {
        this.postData = {
          "id": this.addTypeForm.get('id').value,
          "description": this.addTypeForm.get('description').value
        }
  
        this.typeService.commonPOSTCall(AppSettingsModule.type, this.postData).subscribe((data: any) => {
          this.typeService.alertMessage = 'Type added successfully';
          this._router.navigate(['/type']);
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
      this._router.navigate(['/type']);
    }
    public closeMsg = (msg) => {
      if(msg)
        this[msg] = null;
      this.questionValidationFlag = false;
    }
  }
  
  
  
