import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { ProductService } from './service/product.service';

import { Product } from './domain/product';
import { Cart } from './domain/cart';
import { CartComponent } from "./component/cart/cart.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Array<Product>;  

  @ViewChild(CartComponent) cart:CartComponent;

  constructor(
    private productService: ProductService
  ){}

  ngOnInit(){    
    this.products = this.productService.getProducts();
  }

  onAdd(product: Product) {  
    this.cart.addProduct(product);      
  }
}
