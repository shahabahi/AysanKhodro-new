import { Component } from '@angular/core';
import { Product } from '../products/productModel';
import { ProductService } from '../products/service/product.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products: Product[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getAll();
  }
}
