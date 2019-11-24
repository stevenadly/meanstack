import { Component, OnInit ,TemplateRef} from '@angular/core';
import { AdminCategoriesService } from './admin-categories.service';
import { ICategory } from 'src/app/shared/models';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
 
@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  categories: ICategory[] = [];
  modalRef: BsModalRef;
 
  testCategory:ICategory={
    id:'555555555555555555555555555',
    name:'55555555555555555555555',
    description:'5555555555555555555555555555',
    imgSrc:'5555555555555555555555',
    productCount:55555555555555555
  }
  

  constructor(private AdminCategoriesService: AdminCategoriesService,private modalService: BsModalService) {
  
  
    AdminCategoriesService.getAllAdminCAtegories().subscribe(res => {
      this.categories = res;
      // console.table(this.categories);
    });

    AdminCategoriesService.AddNewCategory(this.testCategory).subscribe(res => {
      debugger;
      this.categories.push(res);

      console.table(this.categories);
    });
    
  }



  ngOnInit() {
  }

}
