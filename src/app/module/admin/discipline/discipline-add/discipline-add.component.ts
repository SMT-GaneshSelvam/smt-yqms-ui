import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DisciplineService } from '../resources/discipline.service';
import { forkJoin } from 'rxjs';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
import { ValidatorHelper } from 'src/app/module/shared/components/validators/custom.validator';

@Component({
  selector: 'app-discipline-add',
  templateUrl: './discipline-add.component.html',
  styleUrls: ['./discipline-add.component.scss']
})
export class DisciplineAddComponent implements OnInit {
 
      public addDisciplineForm: FormGroup;
      public pageLoaded = false;
      public submoduleList = [];
      public datatypeList = [];
      public displayType = [];
      private postData = {};
      serviceError: string = '';
      questionValidationFlag = false;
    
    
      constructor(private _router: Router, private _cd: ChangeDetectorRef, private disciplineService: DisciplineService) { }
    
      ngOnInit() {
    /*     let submodule = this.disciplineService.getAllSipCategory();
        let datatype = this.disciplineService.getAllDatatypes();
        let display = this.disciplineService.getDisplayType();
    
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
        this.addDisciplineForm = new FormGroup({
          id: new FormControl("", [Validators.required]),
          description: new FormControl("", [Validators.required])
        });
      }
    
      addDiscipline = () => {
        window.scrollTo(0, 0)
        if (this.addDisciplineForm.valid) {
          this.postData = {
            "id": this.addDisciplineForm.get('id').value,
            "description": this.addDisciplineForm.get('description').value
          }
    
          this.disciplineService.commonPOSTCall(AppSettingsModule.discipline, this.postData).subscribe((data: any) => {
            this.disciplineService.alertMessage = 'Discipline added successfully';
            this._router.navigate(['admin/discipline']);
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
        this._router.navigate(['admin/discipline']);
      }
      public closeMsg = (msg) => {
        if(msg)
          this[msg] = null;
        this.questionValidationFlag = false;
      }
    }
    
    
    
  