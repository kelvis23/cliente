
class Producto  {
    constructor(id,nombre,categoria,precio,stock){
        this.id=id
        this.nombre=nombre
        this.categoria=categoria
        this.precio=precio
        this.stock=stock
    }
    actualizarCantidad(nuevaCantidad){
        this.stock = nuevaCantidad
        console.log(this.stock)
    }
    obtenerValorTotal (){
        const valor = (this.precio *this.stock)
        return valor;
    }
}
 class Almacen   {
    
  constructor( productos = [] ){
    this.productos =productos

   
  }
    agregarProducto(producto){
        this.productos.push(producto)
   }
   elimarProducto(id){
    for(let i =0; i< this.productos.length; i++){
        if(this.productos[i].id==id){
            thi.producto.splice(i,1);
        }
    }
   }
   buscarProducto(id){
    for(let i =0; i< this.productos.length; i++){
        if(this.productos[i].id=id){
            return this.productos[i];
        }
   }
}
 }



var a1 = new Producto("1235","telefonos","electronico",123,40)

console.log(a1)
a1.actualizarCantidad(50)
a1.obtenerValorTotal()

var b2 = new Almacen ([
   new Producto(1235,"telefonos","electronico",123,40),
   new Producto(150,"sapato","utilidad",50,10)
])

console.log(b2)
b2.agregarProducto()
b2.elimarProducto(1235)
b2.buscarProducto(1235)