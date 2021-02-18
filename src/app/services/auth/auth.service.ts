import { Injectable } from '@angular/core';
import {Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';
// import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }
  storeToken(token?:any) {
    localStorage.setItem('token', token);
    return true;
  }
  logout() {
    // deleteLocalstorage
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    // this.router.navigate(["user"]);
  }
  getToken() {
    let token = localStorage.getItem('token');
    if (token) {

      return token;
    }
    return;
  }


}
