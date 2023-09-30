class ProductoAlmacen {
  constructor(nombre, cantidad, ubicacion) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.ubicacion = ubicacion; //formato coordenadas, ejemplo: "G-7", "C-4"
  }
  getNombre = () => this.nombre;
  getCantidad = () => this.cantidad;
  getUbicacion = () => this.ubicacion;
  setNombre(nombre)       {this.nombre = nombre;}
  setCantidad(cantidad)   {this.cantidad = cantidad;}
  setUbicacion(ubicacion) {this.ubicacion = ubicacion;}

}

class Almacen {
    constructor(productos){
        this.productos = productos;
    }

    getProductos = () => this.productos;
    setProductos(productos){this.productos = productos}

    addProducto(productoNuevo) {this.productos.push(productoNuevo)}

    eliminarProducto(productoX){
        let pos = this.productos.indexOf(productoX)
        this.productos.splice(pos,1)
    }

    editarProducto(pos, nombre, cantidad, ubicacion){
        let productoModificado = this.productos[pos]

        productoModificado.setNombre(nombre);
        productoModificado.setCantidad(cantidad);
        productoModificado.setUbicacion(ubicacion);
    }

    mostrarUbicacion(producto) { console.log(producto.getUbicacion()) }

}

function main() {

    let producto1 = new ProductoAlmacen("Refresco", 89, "G-7")
    let producto2 = new ProductoAlmacen("Agua", 50, "P-4")
    let producto3 = new ProductoAlmacen("Cerveza", 235, "C-6")

    let arrProductos = [producto1, producto2, producto3]
    let almacen = new Almacen(arrProductos)

    let producto4 = new ProductoAlmacen("Malta", 52, "G-2")
    almacen.addProducto(producto4)

    almacen.eliminarProducto(producto2)

    almacen.editarProducto(0,"Refresco de Cola", 100, "Z-13")

    almacen.mostrarUbicacion(producto1)

}
main()