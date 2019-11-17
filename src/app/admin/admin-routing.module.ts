import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { PAGES } from '../shared/constants/page-routes.config';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {path:'dashboard',component:DashboardComponent},
      {path:`${PAGES.products.path}`,  loadChildren: () => import('./admin-products/admin-products.module').then(m => m.AdminProductsModule) },
      {path:`${PAGES.categories.path}`,  loadChildren: () => import('./admin-categories/admin-categories.module').then(m => m.AdminCategoriesModule) }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    // components that are used will be added here.
    DashboardComponent]
})

export class AdminRoutingModule { }
