import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';

const routes: Routes = [
  {
    path:'addproduct',
    component:AddEditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
