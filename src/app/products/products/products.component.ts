import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';
import { ICard, IProduct } from 'src/app/shared/models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  cards: ICard[] = [];

  constructor(private productService: ProductsService, private router: Router, private actviatedRouter: ActivatedRoute) {

  }

  ngOnInit() {
    this.actviatedRouter.params.subscribe((params) => {
      /**  to get products under this category id*/
      if (params['id']) {
        if (this.productService.loadedProducts) {
          this.filterCtegory(params);
        }else{
          this.productService.getAllProducts()
          .subscribe(()=>this.filterCtegory(params));
          }
       
      } else {
        /**  to get all products*/
        this.productService.getAllProducts()
          .subscribe(res => {
            // debugger;
            let products: IProduct[] = res;


            products.forEach((el: IProduct) => {
              const card: ICard = {
                title: el['name'],
                description: `price : ${el['price']}`,
                // #${el['productCount']}
                footerDescription: ``,
                imgSrc: el['imgSrc'],
                // imgSrc:el['imgSrc'],
                btnTxt: 'Add To Cart',
                id: el['id'],
                // this.router.navigate(['/products',el.id])
                BtnFn: ()=>{
                  // debugger;
                  this.productService.addToCart(el);
                  return{}

                }


              }
              this.cards.push(card);
            })

          });
      }
    });



  }


  filterCtegory(params) {
    
    this.productService.getAllProductsByCatId(+params['id'])
    .subscribe(res => {
      // debugger;
      let products: IProduct[] = res;


      products.forEach((el: IProduct) => {
        const card: ICard = {
          title: el['name'],
          description: `price : ${el['price']}`,
          // #${el['productCount']}
          footerDescription: ``,
          imgSrc: el['imgSrc'],
          // imgSrc:el['imgSrc'],
          btnTxt: 'Add To Cart',
          id: el['id'],
          // this.router.navigate(['/products',el.id])
          BtnFn: ()=>{
            // debugger;
            this.productService.addToCart(el);
            return{}
          }


        }
        this.cards.push(card);
      })

    });

  }

}
