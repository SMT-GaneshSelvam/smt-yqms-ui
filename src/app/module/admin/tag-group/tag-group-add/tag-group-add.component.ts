import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TagGroupService } from '../resources/tag-group.service';
import { forkJoin } from 'rxjs';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
import { ValidatorHelper } from 'src/app/module/shared/components/validators/custom.validator';

@Component({
  selector: 'app-tag-group-add',
  templateUrl: './tag-group-add.component.html',
  styleUrls: ['./tag-group-add.component.scss']
})
export class TagGroupAddComponent implements OnInit {

    public addTagGroupForm: FormGroup;
    public pageLoaded = false;
    public submoduleList = [];
    public datatypeList = [];
    public displayType = [];
    private postData = {};
    serviceError: string = '';
    questionValidationFlag = false;
  
  
    constructor(private _router: Router, private _cd: ChangeDetectorRef, private tagGroupService: TagGroupService) { }
  
    ngOnInit() {
  /*     let submodule = this.tagGroupService.getAllSipCategory();
      let datatype = this.tagGroupService.getAllDatatypes();
      let display = this.tagGroupService.getDisplayType();
  
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
      this.addTagGroupForm = new FormGroup({
        id: new FormControl("", [Validators.required]),
        description: new FormControl("", [Validators.required]),
        imported: new FormControl(false),
        addedBy: new FormControl(""),
        addedAt: new FormControl("")
      });
    }
  
    addTagGroup = () => {
      window.scrollTo(0, 0)
      if (this.addTagGroupForm.valid) {
        this.postData = {
          "id": this.addTagGroupForm.get('id').value,
          "description": this.addTagGroupForm.get('description').value,
          "imported": this.addTagGroupForm.get('imported').value? 1 : 0,
          "addedBy": this.addTagGroupForm.get('addedBy').value,
          "addedAt": this.addTagGroupForm.get('addedAt').value,
        }
  
        this.tagGroupService.commonPOSTCall(AppSettingsModule.tagGroup, this.postData).subscribe((data: any) => {
          this.tagGroupService.alertMessage = 'Tag Group added successfully';
          this._router.navigate(['admin/tagGroup']);
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
      this._router.navigate(['admin/tagGroup']);
    }
    public closeMsg = (msg) => {
      if(msg)
        this[msg] = null;
      this.questionValidationFlag = false;
    }
  }
  
  
  
