import { Component, OnInit } from '@angular/core';

import { ProductService } from './service/product.service';

import { Product } from './domain/product';
import { Cart } from './domain/cart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Array<Product>;
  currentCart: Cart;

  constructor(
    private productService: ProductService
  ){}

  ngOnInit(){
    this.currentCart = new Cart();
    this.products = this.productService.getProducts();
  }
  
  onBuy(event: Event) {
    console.log("OnBuy: " + event);      
  }

  onAdd(product: Product) {    
    this.currentCart.add(product);
  }
}
