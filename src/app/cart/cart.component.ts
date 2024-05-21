import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Producto } from '../producto.modelo';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  carrito:Producto[]=[]
  constructor(private cartService:CartServiceService) { }


  ngOnInit(): void {
    this.actualizarCarrito()
  }

  actualizarCarrito(){
    this.carrito = this.cartService.obtenerCarrito()
  }




}