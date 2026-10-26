import { Component, input } from '@angular/core';
import { Producto } from '../models/producto.model';
import { EstadoProductoPipe } from '../estado-producto-pipe';
import { ResaltarStock } from '../resaltar-stock';

@Component({
  imports: [EstadoProductoPipe, ResaltarStock],
  selector: 'app-producto-card',
  styleUrl: './producto-card.css',
  templateUrl: './producto-card.html',
})
export class ProductoCard {
  producto = input.required<Producto>();
}
