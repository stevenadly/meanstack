import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PAGES } from './shared/constants/page-routes.config';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: PAGES.home.url },
  {path:PAGES.home.path , component:HomeComponent},
  // angular till angular 6 lazy loading
  {path:PAGES.login.path , loadChildren:'./login/login.module#LoginModule'},
    // angular till angular 7, 8 lazy loading
  {path:PAGES.products.path , loadChildren: () => import(`./products/products.module`).then(m => m.ProductsModule) },
  {path:`${PAGES.products.path}/:id` , loadChildren: () => import(`./products/products.module`).then(m => m.ProductsModule) },
  {path:PAGES.categories.path , loadChildren: () => import(`./categories/categories.module`).then(m => m.CategoriesModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
