
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
        console.log("el balor total es de "+ valor)
    }
}
 class Almacen   {
    
  constructor( productos = [] ){
    this.productos =productos

   
  }
    agregarProducto(producto){
        this.productos=producto
   }
   elimarProducto(id){
    if(this.productos.find(valor => valor ==id)){
        
    }



   }
   buscarProducto(id){
    if(this.productos.find(valor => valor ==id)){

    }else{
        console.log("no se a encontrado el id ")
    }
   }
}



var a1 = new Producto("1235","telefonos","electronico",123,40)

console.log(a1)
a1.actualizarCantidad(50)
a1.obtenerValorTotal()

var b2 = new Almacen ([
 1235 ==  new Producto(1235,"telefonos","electronico",123,40),
  150 ==  new Producto(150,"sapato","utilidad",50,10)
])

console.log(b2)
b2.agregarProducto()
b2.elimarProducto(1235)
b2.buscarProducto(1235)