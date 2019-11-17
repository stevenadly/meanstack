import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCategoriesComponent } from './admin-categories.component';
import { AdminRoutingModule } from '../admin-routing.module';
import { AdminCategoriesRoutingModule } from './admin-categories-routing.module';



@NgModule({
  declarations: [AdminCategoriesComponent],
  imports: [
    CommonModule,
    AdminCategoriesRoutingModule
  ]
})
export class AdminCategoriesModule { }
