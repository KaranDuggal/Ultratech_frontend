import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [AddEditProductComponent, ProductListComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule
  ]
})
export class ProductModule { }
