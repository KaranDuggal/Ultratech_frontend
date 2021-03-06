import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms'
import {ApiService} from 'src/app/services/api/api.service'
import {SweetalertService} from 'src/app/services/alert/sweetalert.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private apiService:ApiService,
    private alert:SweetalertService,
    private router:Router
  ) { }
  signupForm = new FormGroup({
    firstname: new FormControl(null, { validators: [Validators.required] }),
    lastname: new FormControl(null, { validators: [Validators.required] }),
    phonenumber: new FormControl(null, { validators: [Validators.required] }),
    // email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
    password: new FormControl(null, { validators: [Validators.required] }),
  })
  get checkSignup() {
    return this.signupForm.controls
  }
  signupdata(){
    this.apiService.callAPI("post",this.signupForm.value,"api/users/signup").subscribe((data)=>{
      console.log('data===> ', data)
      this.alert.apiResponseAlert() 
      this.router.navigate(['/'])
    })
    console.log(this.signupForm.value);

  }
  ngOnInit(): void {
  }

}
