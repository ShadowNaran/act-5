import { Component, inject, signal } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { CategoriaService } from '../services/categoria.service';

@Component({
  imports: [],
  selector: 'app-categorias',
  styleUrl: './categorias.css',
  templateUrl: './categorias.html',
})
export class Categorias {
  private categoriaService = inject(CategoriaService);
  categorias = signal<Categoria[]>([]);
  cargando = signal(true);
  error = signal('');

  constructor() {
    this.categoriaService.obtenerCategorias().subscribe({
      next: (categorias) => { this.categorias.set(categorias); this.cargando.set(false); },
      error: () => { this.error.set('No se pudieron cargar las categorías.'); this.cargando.set(false); },
    });
  }
}
