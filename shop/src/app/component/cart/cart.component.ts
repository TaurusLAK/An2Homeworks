import { Component, OnInit, Input } from '@angular/core';

import { Cart } from '../../domain/cart';
import { Product } from '../../domain/product';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {  

  cart: Cart;

  ngOnInit() {
    this.cart = new Cart();
  }
  
  addProduct(product: Product) {
    this.cart.add(product);
  }

  onBuy(event: Event) {
    console.log("OnBuy: " + event);      
  }
}
