import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from '../producto-service.service';
import { Producto } from '../producto.modelo';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-item-detail-products',
  templateUrl: './item-detail-products.component.html',
  styleUrl: './item-detail-products.component.css'
})
export class ItemDetailProductsComponent implements OnInit {

  constructor(private productoServicio:ProductoServiceService, private cartService:CartServiceService){

  }
productos:Producto[]=[]

cart:Producto[]=[]

ngOnInit(): void {
  this.productos = this.productoServicio.productos
  this.cart =  this.cartService.cart
}

agregarProducto(product:Producto){
  this.productoServicio.agregarProducto(product)
  
}

obtenerCarrito(){
  console.log(this.cart)

  return this.cart
}

}
