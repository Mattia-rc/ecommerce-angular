import { Injectable } from '@angular/core';
import { Producto } from './producto.modelo';
import { CartServiceService } from './cart-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  constructor(private cartService: CartServiceService) { }

  productos:Producto[]=[
    {
      nombre:"3.0 OFF COURT LEATHER",
      detalle:"Men's street shoes",
      description:"The arrow, zip ties and labels on Off-Court ' sneakers are all part of Virgil Abloh's visin of branding throught re-contextualisedd iconic symbols. They're pannelled from leather and canvas with offbeat",
      año:2024,
      precio:34000,
      cantidad:4,
      photo:"https://nikearprod.vtexassets.com/arquivos/ids/811727-1200-1200?width=1200&height=1200&aspect=true",
      size:[40, 42, 38, 37.5],
      colores: ["#ffda9e", "#fdf9c4", "#84b6f4"]
    },
    {
      nombre:"3.0 OFF COURT LEATHER",
      detalle:"Snickers Off-White",
      description:"The arrow, zip ties and labels on Off-Court ' sneakers are all part of Virgil Abloh's visin of branding throught re-contextualisedd iconic symbols. They're pannelled from leather and canvas with offbeat",
      año:2024,
      precio:35000,
      cantidad:4,
      photo:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw48411a5a/products/NIDD1869-107/NIDD1869-107-2.JPG",
      size:[40, 42, 38, 37.5],
      colores: ["#ffda9e", "#fdf9c4", "#"]
    },
    {
      nombre:"3.0 OFF COURT LEATHER",
      detalle:"Snickers Off-Grey",
      description:"The arrow, zip ties and labels on Off-Court ' sneakers are all part of Virgil Abloh's visin of branding throught re-contextualisedd iconic symbols. They're pannelled from leather and canvas with offbeat",
      año:2024,
      precio:38000,
      cantidad:4,
      photo:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1f7c742d/products/NIDZ4130-201/NIDZ4130-201-1.JPG",
      size:[40, 42, 38, 37.5],
      colores: ["#ffda9e", "#fdf9c4", "#"]
    },
    {
      nombre:"3.0 OFF COURT LEATHER",
      detalle:"Snickers Off-Orange",
      description:"The arrow, zip ties and labels on Off-Court ' sneakers are all part of Virgil Abloh's visin of branding throught re-contextualisedd iconic symbols. They're pannelled from leather and canvas with offbeat",
      año:2024,
      precio:37000,
      cantidad:4,
      photo:"https://nikearprod.vtexassets.com/arquivos/ids/730793-800-800?width=800&height=800&aspect=true",
      size:[40, 42, 38, 37.5],
      colores: ["#ffda9e", "#fdf9c4", "#"]
    },
    {
      nombre:"3.0 OFF COURT LEATHER",
      detalle:"Men's street shoes",
      description:"The arrow, zip ties and labels on Off-Court ' sneakers are all part of Virgil Abloh's visin of branding throught re-contextualisedd iconic symbols. They're pannelled from leather and canvas with offbeat",
      año:2024,
      precio:34000,
      cantidad:4,
      photo:"https://nikearprod.vtexassets.com/arquivos/ids/531559/DV0788_001_A_PREM.jpg?v=638161381073470000",
      size:[40, 42, 38, 37.5],
      colores: ["#ffda9e", "#fdf9c4", "#84b6f4"]
    },
    {
      nombre:"3.0 OFF COURT LEATHER",
      detalle:"Snickers Off-White",
      description:"The arrow, zip ties and labels on Off-Court ' sneakers are all part of Virgil Abloh's visin of branding throught re-contextualisedd iconic symbols. They're pannelled from leather and canvas with offbeat",
      año:2024,
      precio:35000,
      cantidad:4,
      photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b9fb6c22-9fdc-4e8c-8a76-1a253df72fdb/air-max-plus-drift-zapatillas-1L9ldF.png",
      size:[40, 42, 38, 37.5],
      colores: ["#ffda9e", "#fdf9c4", "#"]
    },
    {
      nombre:"3.0 OFF COURT LEATHER",
      detalle:"Men's street shoes",
      description:"The arrow, zip ties and labels on Off-Court ' sneakers are all part of Virgil Abloh's visin of branding throught re-contextualisedd iconic symbols. They're pannelled from leather and canvas with offbeat",
      año:2024,
      precio:34000,
      cantidad:4,
      photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9bfad942-8485-4cf7-8953-e7fe1272bc91/air-jordan-legacy-312-low-zapatillas-d9dPM1.png",
      size:[40, 42, 38, 37.5],
      colores: ["#ffda9e", "#fdf9c4", "#84b6f4"]
    },
    {
      nombre:"3.0 OFF COURT LEATHER",
      detalle:"Snickers Off-White",
      description:"The arrow, zip ties and labels on Off-Court ' sneakers are all part of Virgil Abloh's visin of branding throught re-contextualisedd iconic symbols. They're pannelled from leather and canvas with offbeat",
      año:2024,
      precio:35000,
      cantidad:4,
      photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a2eaf0c0-a40d-4098-9511-d319f4be9ab9/dunk-low-zapatillas-NDWvwq.png",
      size:[40, 42, 38, 37.5],
      colores: ["#ffda9e", "#fdf9c4", "#"]
    },
    {
      nombre:"3.0 OFF COURT LEATHER",
      detalle:"Men's street shoes",
      description:"The arrow, zip ties and labels on Off-Court ' sneakers are all part of Virgil Abloh's visin of branding throught re-contextualisedd iconic symbols. They're pannelled from leather and canvas with offbeat",
      año:2024,
      precio:34000,
      cantidad:4,
      photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/655f871a-5bdf-47be-ba7c-2020ffc15c3f/air-force-1-07-zapatillas-LWdfHF.png",
      size:[40, 42, 38, 37.5],
      colores: ["#ffda9e", "#fdf9c4", "#84b6f4"]
    },
    {
      nombre:"3.0 OFF COURT LEATHER",
      detalle:"Snickers Off-White",
      description:"The arrow, zip ties and labels on Off-Court ' sneakers are all part of Virgil Abloh's visin of branding throught re-contextualisedd iconic symbols. They're pannelled from leather and canvas with offbeat",
      año:2024,
      precio:35000,
      cantidad:4,
      photo:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bc016bc-cd7a-49cc-a399-47930b00c59f/dunk-low-retro-zapatillas-wwlDHh.png",
      size:[40, 42, 38, 37.5],
      colores: ["#ffda9e", "#fdf9c4", "#"]
    }

  ]

   encontrarProducto(indice:number) {
    let producto:Producto = this.productos[indice]
    return producto
  }

  agregarProducto(product:Producto){
    this.cartService.agregarProduct(product)
    console.log(this.cartService.cart)
  }
}
