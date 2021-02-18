import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/services/api/api.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productArr:any
  constructor(
    private apiService: ApiService,
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

}
