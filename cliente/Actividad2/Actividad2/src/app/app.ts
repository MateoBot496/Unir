import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product, ProductService } from './services/product';
import { ProductList } from './components/product-list/product-list';
import { ProductForm } from "./components/product-form/product-form";
import {ProductFilter } from "./components/product-filter/product-filter";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, ProductForm, ProductFilter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Actividad2');


  constructor(private ProductService: ProductService) {}

  onProductoCreado(producto: any) {
    this.ProductService.agregarProducto(producto);
  }
}
