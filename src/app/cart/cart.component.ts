import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products/products.service';
import { ICartItem } from '../shared/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  counter: number = 0;
  dropdownMenu: boolean = false;
  cartItems: ICartItem[] = [];
  ifthereProduct: boolean= false ;


  constructor(private ProductsService: ProductsService) { }

  ngOnInit() {

    this.ProductsService.addedToCart.subscribe(product => {

      let cartItem: ICartItem = {
        id: +product.id,
        name: product.name,
        imgSrc: product.imgSrc,
        price: product.price,
        quantity: 1
      };


      // to prevent duplication of products and increase 
      var index = this.cartItems.findIndex(o => o.id === cartItem.id)
      if (index === -1) { this.cartItems.push(cartItem);  }
      else { this.cartItems[index].quantity++; }


      this.counter++;
      this.ifthereProduct = true; 
    });
  }


  increaseQuantity(i){
    this.cartItems[i].quantity++;
  }
  decreaseQuantity(i){
     if(this.cartItems[i].quantity>1){
      this.cartItems[i].quantity--;
    }
  }

  toggleDropDown() {
    this.dropdownMenu = !this.dropdownMenu;
  }

}
