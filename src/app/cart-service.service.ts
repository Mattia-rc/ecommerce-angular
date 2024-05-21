import { Injectable } from '@angular/core';
import { Producto } from './producto.modelo';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
cart:Producto[]=[]

  agregarProduct(product:Producto){
    this.cart.push(product)
  }
  obtenerCarrito() {
    return this.cart;
  }
  constructor() { }



}

