import { Component } from '@angular/core';
import { ProductService, Product } from '../../services/product';
import { ProductCard } from '../product-card/product-card';
import { ProductForm } from '../product-form/product-form';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  productos: Product[] = [];

  constructor (private productService: ProductService){
    this.productService.cargarProductos();

    this.productService.productos$.subscribe(productos => {
      this.productos = productos;
      //console.log('Productos recibidos:', productos);
    });

  }

  onEliminar(id: string) {
    this.productService.eliminarProducto(id);
  }
}
