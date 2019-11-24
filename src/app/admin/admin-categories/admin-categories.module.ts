import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCategoriesComponent } from './admin-categories.component';
import { AdminCategoriesRoutingModule } from './admin-categories-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddCategoryComponent } from './add-category/add-category.component';



@NgModule({
  declarations: [AdminCategoriesComponent, AddCategoryComponent],
  imports: [
    CommonModule,
    AdminCategoriesRoutingModule,
    SharedModule,
    ModalModule.forRoot()
  ]
})
export class AdminCategoriesModule { }
