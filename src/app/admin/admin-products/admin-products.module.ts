import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './admin-products.component';
import { AdminProductsRoutingModule } from './admin-products-routing.module';



@NgModule({
  declarations: [AdminProductsComponent],
  imports: [
    CommonModule,
    AdminProductsRoutingModule
  ]
})
export class AdminProductsModule { }
