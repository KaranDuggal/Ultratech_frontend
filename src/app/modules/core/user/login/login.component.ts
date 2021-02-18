import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms'
import {Router} from '@angular/router'
import {ApiService} from 'src/app/services/api/api.service'
import {SweetalertService} from 'src/app/services/alert/sweetalert.service'
import {AuthService} from 'src/app/services/auth/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private apiService:ApiService,
    private alert:SweetalertService,
    private authService:AuthService,
    private router:Router
  ) { }

  loginForm = new FormGroup({
    phonenumber: new FormControl(null, { validators: [Validators.required] }),
    password: new FormControl(null, { validators: [Validators.required] }),
  })
  get checkLogin() {
    return this.loginForm.controls
  }
  logindata() {
    this.apiService.callAPI("post", this.loginForm.value, "api/users/login").subscribe((data:any) => {
      console.log('==================');
      // console.log('data===> ', data)
      console.log(data.token);
      
      
      this.authService.storeToken(data.token)
      this.alert.apiResponseAlert()
      this.router.navigate(['/'])
    })
    

  }
  ngOnInit(): void {
  }

}
