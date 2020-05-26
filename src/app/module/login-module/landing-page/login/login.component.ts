import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  private userData;
  usernew = {
    name: 'smt',
    new: [
      {
        oneD: 'smt'
      }
    ]
  }
  public operationStatus = false;
  public message;
  public pageLoaded = false;
  constructor(private router: Router, private _cd: ChangeDetectorRef) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      database: new FormControl("", [Validators.required]),
      agreeTo: new FormControl(false, [Validators.pattern('true')])
    });

    if (localStorage.getItem('token') && localStorage.getItem('userID')) {
      let userId = localStorage.getItem('userID');
      this.router.navigate(['/dashboard'])
      //window.location.href = window.location.protocol+"//"+window.location.host+'/#/dashboard/'+userId
    }
    else {
      //this.auth.userData.next(null);
      this.loginForm = new FormGroup({
        email: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required]),
        database: new FormControl("", [Validators.required]),
        agreeTo: new FormControl(false, [Validators.pattern('true')])
      });
      this.pageLoaded = true;
      this._cd.detectChanges();

    }
  }


  onSubmit(loginUser) {
    let display_name = loginUser.email; 
    this.router.navigate(['/checksheet'])
  }

}
