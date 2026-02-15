import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private url = 'https://api.npoint.io/1dee63ad8437c82b24fe';

  private productosSubject = new BehaviorSubject<Product[]>([]);
  productos$ = this.productosSubject.asObservable();

  private productosOriginales: Product[] = [];

  constructor(private http: HttpClient) {}

  cargarProductos() {
      return this.http.get<Product[]>(this.url).subscribe({
      next: (productos) => {
        this.productosOriginales = productos;
        this.productosSubject.next(productos);
      },
      error: (err) => console.error('Error al cargar productos:', err)
    });
  }

  agregarProducto(datos: any) {

    const nuevoProducto: Product = {
      _id: crypto.randomUUID(),   // Generamos un ID único (trampilla)
      name: datos.nombre,
      description: datos.descripcion,
      price: datos.precio,
      category: datos.category,
      image: datos.image,
      active: datos.active
    };

    // Añadimos el nuevo producto al principio de la lista
    this.productosOriginales = [nuevoProducto, ...this.productosOriginales];

    // Emitimos la nueva lista para que Angular actualice la vista
    this.productosSubject.next(this.productosOriginales);
    console.log('Producto agregado:', nuevoProducto);
  }

  eliminarProducto(id: string) {
    this.productosOriginales = this.productosOriginales.filter(p => p._id !== id);
    this.productosSubject.next(this.productosOriginales);
  }

  filtrarPorNombre(nombre: string) {
    const nombreLower = nombre.toLowerCase();
    const productosFiltrados = this.productosOriginales.filter(p =>
      p.name.toLowerCase().includes(nombreLower)
    );
    this.productosSubject.next(productosFiltrados);
  }

  filtrarPorCategoria(categoria: string) {
    if (categoria === 'todas') {
      this.productosSubject.next(this.productosOriginales);
      return;
    }

    const productosFiltrados = this.productosOriginales.filter(p =>
      p.category.toLowerCase().includes(categoria)
    );

    this.productosSubject.next(productosFiltrados);
  }

  filtrarPorActivo(activo: boolean) {
    if (!activo) {
      this.productosSubject.next(this.productosOriginales);
      return;
    }

    const productosFiltrados = this.productosOriginales.filter(p => p.active);
    this.productosSubject.next(productosFiltrados);
  }

}
