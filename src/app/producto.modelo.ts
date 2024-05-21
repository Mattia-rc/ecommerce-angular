export class Producto{
    constructor(nombre:String, detalle:String, año:Number, precio:Number, cantidad:Number, photo:String, description:String, size:[], colores:[] ){
        this.nombre = nombre
        this.detalle = detalle
        this.año = año
        this.precio = precio
        this.cantidad = cantidad
        this.photo = photo
        this.description = description
        this.size = size
        this.colores=colores
    }
    nombre:String=""
    detalle:String=""
    año:Number=0
    precio:Number=0
    cantidad:Number=0
    photo:String=""
    description:String=""
    size:number[]
    colores:String[]
}
