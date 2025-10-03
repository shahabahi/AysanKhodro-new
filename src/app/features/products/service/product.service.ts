import { Injectable } from '@angular/core';
import { Product, products } from '../productModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = products;

  getProduct(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }

  getAll(): Product[] {
    return this.products;
  }
}
