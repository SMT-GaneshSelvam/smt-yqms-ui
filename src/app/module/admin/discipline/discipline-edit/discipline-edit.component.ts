import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DisciplineService } from '../resources/discipline.service';
import { forkJoin } from 'rxjs';
import { AppSettingsModule } from 'src/app/core/app-settings/app-settings.module';
import { ValidatorHelper } from 'src/app/module/shared/components/validators/custom.validator';

@Component({
  selector: 'app-discipline-edit',
  templateUrl: './discipline-edit.component.html',
  styleUrls: ['./discipline-edit.component.scss']
})
export class DisciplineEditComponent implements OnInit {
    
      editDisciplineForm: FormGroup;
      pageLoaded = false;
      submoduleList = [];
      datatypeList = [];
      displayType = [];
      editDetails;
      private postData = {};
      serviceError: string = '';
      questionValidationFlag = false;
    
      constructor(private _router: Router, private _cd: ChangeDetectorRef, private disciplineService: DisciplineService, private activatedRoute: ActivatedRoute) { }
    
      ngOnInit() {
        this.activatedRoute.params.subscribe(routeParams => {
          if (routeParams.id) {
            let disciplineId = routeParams.id;
            let getEditDetails = this.disciplineService.getDisciplineByID(disciplineId);
    
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
    
        this.editDisciplineForm = new FormGroup({
          id: new FormControl(this.editDetails.id, [Validators.required]),
          description: new FormControl(this.editDetails.description, [Validators.required])
        });
      }
    
      editDiscipline = () => {
        window.scrollTo(0, 0)
        if (this.editDisciplineForm.valid) {
          this.postData = {
            "id": this.editDisciplineForm.get('id').value,
            "description": this.editDisciplineForm.get('description').value
          }
    
          this.disciplineService.commonPOSTCall(AppSettingsModule.discipline, this.postData).subscribe((data: any) => {
            this.disciplineService.alertMessage = 'Discipline updated successfully';
            this._router.navigate(['discipline']);
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
        this._router.navigate(['discipline']);
      }
      public closeMsg = (msg) => {
        if (msg)
          this[msg] = null;
        this.questionValidationFlag = false;
      }
    }
    
    
    