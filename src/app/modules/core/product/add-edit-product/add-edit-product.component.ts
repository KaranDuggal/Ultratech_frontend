import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms'
import { ApiService } from 'src/app/services/api.service'
@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  // @ViewChild('file1',{static:false})
  images: any
  multipleImages=[]
  
  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    // private elementRef :ElementRef
  ) { }
  addproductform = this.formBuilder.group({
    product_name: new FormControl(null, { validators: [Validators.required] }),
    product_type: new FormControl(null, { validators: [Validators.required] }),
    brand_name: new FormControl(null, { validators: [Validators.required] }),
    size: new FormControl(null, { validators: [Validators.required] }),
    quantity: new FormControl(null, { validators: [Validators.required] }),
    price: new FormControl(null, { validators: [Validators.required] })
    // images: this.formBuilder.array([
    //   new FormControl(null, { validators: [Validators.required] }),
    //   new FormControl(null, { validators: [Validators.required] }),
    //   new FormControl(null, { validators: [Validators.required] }),
    //   new FormControl(null, { validators: [Validators.required] }),
    // ])
  })

  get checkaddproduct() {
    return this.addproductform.controls
  }
  productdata() {
    const formData = new FormData()
    for (const img of this.multipleImages) {
      formData.append('images',img)
    }
    formData.append("data",this.addproductform.value)
    // console.log(formData);
    // const image = elementRef.
    this.apiService.callAPI("post", formData, "api/products/addproduct").subscribe((data) => {
      console.log('==================');
      console.log('data===> ', data)
    })
    console.log('this.addproduct.value', this.addproductform.value)
    console.log(this.images);
  }
  ngOnInit(): void {
  }
  onFileChange(event:any){
    if(event.target.files.length>0){
      this.multipleImages = event.target.files
    }
  }
}
