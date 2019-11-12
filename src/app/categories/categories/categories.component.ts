import { Component, OnInit } from '@angular/core';
import { ICategory, ICard } from 'src/app/shared/models';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
// categories :ICategory[];
cards:ICard[]=[];

  constructor(private c: CategoriesService , private router :Router) {
  
   }

  ngOnInit() {
    this.c.getAllCategories()
    .subscribe(res=>{
      // debugger;
      let categories:ICategory[]=res;
      categories.forEach((el:ICategory)=>{
        const card :ICard={
          title:el['name'],
          description:el['description'],
          footerDescription:`#${el['productCount']}`,
          imgSrc:'https://www.logomakershop.com/img/logo992.png?timestamp=1498743185793',
          // imgSrc:el['imgSrc'],
          btnTxt:'open Products',
          id:el['id'],
          BtnFn:()=>{this.router.navigate(['/products',el.id])}

          
        }
        this.cards.push(card);
      })
      // console.log('==================>',this.cards);

    });
  }

}
