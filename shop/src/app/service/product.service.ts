import { Injectable } from '@angular/core';
import { Product } from "../domain/product";
import { Category } from "../domain/category"; 


const PRODUCTS: Array<Product> = [
  {
    name: "Product #1", 
    description: "Description for product #1", 
    price: 100, 
    category: Category.MISCELLANEOUS,
    isAvailable: true
  },
  {
    name: "Product #2", 
    description: "Description for product #2", 
    price: 200, 
    category: Category.ELECTRONIC,
    isAvailable: false
  },
  {
    name: "Product #3", 
    description: "Description for product #3", 
    price: 300, 
    category: Category.MISCELLANEOUS,
    isAvailable: false
  },
  {
    name: "Product #4", 
    description: "Description for product #4", 
    price: 400, 
    category: Category.ELECTRONIC,
    isAvailable: true
  }
];

@Injectable()
export class ProductService {

  getProducts(): Array<Product> {
    return PRODUCTS;
  }  
}
