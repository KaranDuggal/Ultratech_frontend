import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/services/api/api.service'
import {SweetalertService} from 'src/app/services/alert/sweetalert.service'
import {Router,ActivatedRoute,Params} from '@angular/router'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productData:any
  constructor(
    private apiService: ApiService,
    private alert:SweetalertService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }
  async getdata(){
    this.activatedRoute.params.subscribe((params: any) => {
      const id = params.id
      this.apiService.callAPI("get","", `api/products/allproduct/${id}`).subscribe((data:any) => {
        this.productData = data.data
        // console.log('productdata', this.productData.product_name)
      })
    });   
  }

  ngOnInit(): void {
    this.getdata()
  }

}
