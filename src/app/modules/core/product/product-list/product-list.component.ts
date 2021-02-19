import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/services/api/api.service'
import {SweetalertService} from 'src/app/services/alert/sweetalert.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productArr:any
  constructor(
    private apiService: ApiService,
    private alert:SweetalertService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getdata()
  }
  getdata(){
    this.apiService.callAPI("get","", "api/products/allproduct").subscribe((data:any) => {
      this.productArr = data.data
      console.log('this.productArr', this.productArr)
    })
  }
  delete(id:any){
    console.log('id', id)
    this.apiService.callAPI("delete", "", `api/products/allproduct/${id}/delete`).subscribe((data) => {
      console.log('==================');
      console.log('data===> ', data)
      this.alert.apiResponseAlert() 
      location.reload()
      // this.router.navigate(['product/allproduct'])
    })
  }
}
