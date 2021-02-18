import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path:'addproduct',
    component:AddEditProductComponent
  },
  {
    path:'allproduct',
    component:ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
