import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from '../producto-service.service';
import { Producto } from '../producto.modelo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrl: './detail-component.component.css'
})
export class DetailComponentComponent implements OnInit {
indice:number=0
productoSeleccionado:Producto | undefined;

  constructor(private productoServicio:ProductoServiceService, private route:ActivatedRoute){

  }
  productos:Producto[]=[]

ngOnInit(): void {
  this.productos = this.productoServicio.productos
  this.indice = this.route.snapshot.params['id']
  this.productoSeleccionado = this.productoServicio.encontrarProducto(this.indice)
}
}
