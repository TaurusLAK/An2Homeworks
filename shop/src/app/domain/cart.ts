import { Product } from "./product";

export class Cart {
  public entries: Array<Product> = []

  add(product: Product){
    this.entries.push(product);
  }
}