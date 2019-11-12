import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Subject } from 'rxjs';
import { map } from 'rxjs/Operators';

import { IProduct } from './../shared/models/product.interface';
import 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  loadedProducts: IProduct[];
  CartProducts: IProduct[]=[];
 addedToCart = new Subject<IProduct>();


  constructor(private http: HttpClient) {

  }

  getAllProducts() {
    return this.http.get('/assets/data/products.json')
      .pipe(map((res: any[]) => {

        let products: IProduct[] = [];

        res['arrayOfProducts'].forEach(el => {


          let product: IProduct = {
            id: el['product_id'],
            name: el['product_name'],
            imgSrc: el['product_image'],
            price: el['product_price'],
            category: +el['product_master_category'],
            describtion: 'hello world'
          }

          products.push(product);
        })
        // to prevent load api again when clicking the category products
        this.loadedProducts = products;
        return products;
      }))
  }

  getAllProductsByCatId(categoryId: number) {
    let result = this.loadedProducts.filter( el => +el.category === categoryId);
    // debugger;
    return of(result);
  }


  addToCart(product :IProduct){
    // debugger;
    this.CartProducts.push(product);
    this.addedToCart.next(product);
  }

}
