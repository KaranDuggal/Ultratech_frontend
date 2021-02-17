import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm = new FormGroup({
    email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
    password: new FormControl(null, { validators: [Validators.required] }),
  })
  get checkLogin() {
    return this.loginForm.controls
  }
  logindata() {
    // this.apiService.callAPI("post", this.loginForm.value, "api/user/login").subscribe((data) => {
    //   console.log('==================');
    //   console.log('data===> ', data)
    // })
    console.log(this.loginForm.value);
    
  }
  ngOnInit(): void {
  }

}
