import { Component } from '@angular/core';
import { Product } from './productModel';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: Product[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getAll();
  }
}
