import { Component, inject, signal } from '@angular/core';
import { Producto } from '../models/producto.model';
import { ProductoService } from '../services/producto.service';
import { ProductoCard } from '../producto-card/producto-card';

@Component({
  imports: [ProductoCard],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {
  private productoService = inject(ProductoService);
  productos = signal<Producto[]>([]);
  cargando = signal(true);
  error = signal('');

  constructor() {
    this.productoService.obtenerProductos().subscribe({
      next: (productos) => { this.productos.set(productos); this.cargando.set(false); },
      error: () => { this.error.set('No se pudieron cargar los productos.'); this.cargando.set(false); },
    });
  }
}
