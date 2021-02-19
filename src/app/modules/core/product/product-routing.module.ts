import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path:'addproduct',
    component:AddEditProductComponent
  },
  {
    path:'allproduct',
    component:ProductListComponent
  },
  {
    path:'allproduct/:id/details',
    component:ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
