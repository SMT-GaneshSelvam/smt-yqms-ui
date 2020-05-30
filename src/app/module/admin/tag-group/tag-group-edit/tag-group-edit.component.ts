import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TagGroupService } from '../resources/tag-group.service';
import { forkJoin } from 'rxjs';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
import { ValidatorHelper } from 'src/app/module/shared/components/validators/custom.validator';

@Component({
  selector: 'app-tag-group-edit',
  templateUrl: './tag-group-edit.component.html',
  styleUrls: ['./tag-group-edit.component.scss']
})
export class TagGroupEditComponent implements OnInit {
  
    editTagGroupForm: FormGroup;
    pageLoaded = false;
    submoduleList = [];
    datatypeList = [];
    displayType = [];
    editDetails;
    private postData = {};
    serviceError: string = '';
    questionValidationFlag = false;
  
    constructor(private _router: Router, private _cd: ChangeDetectorRef, private tagGroupService: TagGroupService, private activatedRoute: ActivatedRoute) { }
  
    ngOnInit() {
      this.activatedRoute.params.subscribe(routeParams => {
        if (routeParams.id) {
          let tagGroupId = routeParams.id;
          let getEditDetails = this.tagGroupService.getTagGroupByID(tagGroupId);
  
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
  
      this.editTagGroupForm = new FormGroup({
        id: new FormControl(this.editDetails.id, [Validators.required]),
        description: new FormControl(this.editDetails.description, [Validators.required]),
        imported: new FormControl(this.editDetails.imported),
        addedBy: new FormControl(this.editDetails.addedBy),
        addedDate: new FormControl(this.editDetails.addedDate)
      });
    }
  
    editTagGroup = () => {
      window.scrollTo(0, 0)
      if (this.editTagGroupForm.valid) {
        this.postData = {
          "id": this.editTagGroupForm.get('id').value,
          "description": this.editTagGroupForm.get('description').value,
          "imported": this.editTagGroupForm.get('imported').value ? 1 : 0,
          "addedBy": this.editTagGroupForm.get('addedBy').value,
          "addedDate": this.editTagGroupForm.get('addedDate').value,
        }
  
        this.tagGroupService.commonPOSTCall(AppSettingsModule.tagGroup, this.postData).subscribe((data: any) => {
          this.tagGroupService.alertMessage = 'Tag Group updated successfully';
          this._router.navigate(['tagGroup']);
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
      this._router.navigate(['tagGroup']);
    }
    public closeMsg = (msg) => {
      if (msg)
        this[msg] = null;
      this.questionValidationFlag = false;
    }
  }
  
  
  