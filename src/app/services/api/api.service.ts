import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = 'http://localhost:3000/'
  constructor(
    private http:HttpClient
  ) { }
  callAPI(method: String, apidata: any, APIEndPoint: String) {
    if(method==='post'){
      return this.http.post(this.baseURL + APIEndPoint, apidata);
    }else if(method==='get'){
      return this.http.get(this.baseURL + APIEndPoint, apidata);
    }else if(method==='delete'){
      return this.http.delete(this.baseURL + APIEndPoint, apidata);
    }else{
      return this.http.get(this.baseURL + APIEndPoint, apidata);
    }
  }
}
