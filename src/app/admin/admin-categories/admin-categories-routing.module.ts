import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminCategoriesComponent } from './admin-categories.component';


const routes: Routes = [
    {
        path: '', component: AdminCategoriesComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AdminCategoriesRoutingModule { }
