import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms'
import { ApiService } from 'src/app/services/api/api.service'
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  images: any
  showme: boolean = false
  multipleImages = []
  data = []
  // @ViewChild("product_type") product_type:ElementRef

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  addproductform = this.formBuilder.group({
    product_name: new FormControl(null, { validators: [Validators.required] }),
    product_type: new FormControl(null, { validators: [Validators.required] }),
    brand_name: new FormControl(null, { validators: [Validators.required] }),
    size: new FormControl(null, { validators: [Validators.required] }),
    quantity: new FormControl(null, { validators: [Validators.required] }),
    price: new FormControl(null, { validators: [Validators.required, Validators.minLength(8)] })
    // images: this.formBuilder.array([
    //   new FormControl(null, { validators: [Validators.required] }),
    //   new FormControl(null, { validators: [Validators.required] }),
    //   new FormControl(null, { validators: [Validators.required] }),
    //   new FormControl(null, { validators: [Validators.required] }),
    // ])
  })
  get checkaddproduct() { return this.addproductform.controls }
  productdata() {
    const formData = new FormData()
    for (const img of this.multipleImages) {
      formData.append('images', img)
    }
    // formData.set(username,"karan")
    this.apiService.callAPI("post", formData, "api/products/addproduct").subscribe((data) => {
      console.log('==================');
      console.log('data===> ', data)
    })
    console.log('this.addproduct.value', this.addproductform.value)
    console.log(this.images);
  }
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params: any) => { if (params.id) { this.isAddMode = false } })
  }
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files
    }
  }


  // ===================field conditions ==================
  UWPS_value: boolean = false
  KNXT_value: boolean = false
  size: boolean = false
  quantity: boolean = false
  product_type(data: any) {
    if (data === "Cement") {
      this.UWPS_value = true
      this.quantity = true
      this.KNXT_value = false
      this.size = false

    }
    if (data === "Steel") {
      this.UWPS_value = false
      this.quantity = false
      this.KNXT_value = true
      this.size = true
    }
  }
  onkeydown(e: any) {
    console.log(e.length);
    let input;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
      return false;
    }
    if (e.which === 0) {
      return true;
    }
    if (e.which < 33) {
      return true;
    }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
  }
}
