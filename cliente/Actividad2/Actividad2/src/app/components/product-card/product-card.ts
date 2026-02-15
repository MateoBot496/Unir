import { Component, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Product, ProductService } from '../../services/product';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;

  @Output() eliminar = new EventEmitter<string>();

  constructor(private productService: ProductService) {}

  eliminarProducto() {
    this.eliminar.emit(this.product._id);
  }


}
