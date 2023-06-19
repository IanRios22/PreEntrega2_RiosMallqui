class CarritoCompras {
    constructor() {
        this.productos = [];
        this.total = 0;
    }

    enCarrito(new_prod) {
        return this.productos.find((producto) => {
            if (
                producto.nombre == new_prod.nombre &&
                producto.precio == new_prod.precio
            ) {
                return true;
            } else {
                return false;
            }
        });
    }

    agrega(new_prod) {
        let prod_encontrado = this.enCarrito(new_prod);

        if(new_prod.cantidad > 5){
            alert('Llego al maximo de la cantidad de productos');
        }else{
            if (prod_encontrado) {
                prod_encontrado.cantidad += 1;
                prod_encontrado.precio = new_prod.precio;
                prod_encontrado.precio_parcial =
                    new_prod.precio * prod_encontrado.cantidad;
            } else {
                this.productos.push(new_prod);
                alert("El producto " + new_prod.nombre + " fue agregado con exito");
            }
        }

    }

    quitar(producto) {
        let prod_encontrado = this.enCarrito(producto);
        if (prod_encontrado) {
            let indice = this.productos.indexOf(prod_encontrado);
            this.productos.splice(indice, 1);
            alert("El producto " + producto.nombre + " fue quitado con exito");
        }
    }

    buscar(nombre) {
        let result_busqueda = this.productos.filter((producto) =>
            producto.nombre.includes(nombre)
        );
        alert("PRODUCTO ENCONTRADO ES: ");
        result_busqueda.forEach((producto) => {
            alert(
                "Nombre: " +
                producto.nombre +
                "\nPrecio: " +
                producto.precio +
                "\nCantidad: " +
                producto.cantidad
            );
        });
    }

    listar() {
        alert("Los producto que estan en el carrito son: ");
        this.productos.forEach((producto) => {
            alert(
                "--------------\n Nombre: " +
                producto.nombre +
                "\nPrecio: " +
                producto.precio +
                "\n Cantidad: " +
                producto.cantidad +
                "\nPrecio_Parcial: " +
                producto.precio_parcial
            );
        });
        this.total = this.productos.reduce(
            (acumulador, producto) =>
                acumulador + producto.precio * producto.cantidad,
            0
        );
        alert("El total del carrito es: $ " + this.total);
    }
}

const carrito = new CarritoCompras();

function agregaVideojuego() {
    let nombre = prompt("Introduzca el nombre del producto: ");
    let precio = prompt("Introduzca el precio del producto: ");
    let cantidad = prompt("Introduzca la cantidad: ");

    const new_prod = {
        nombre: nombre,
        precio: precio,
        cantidad: parseInt(cantidad),
        precio_parcial: parseInt(precio),
    };

    carrito.agrega(new_prod);
}

function delete_prod() {
    let nombre = prompt("Introduzca el nombre del producto que desea eliminar: ");
    let precio = prompt("Introduzca el precio del producto a eliminar: ");

    carrito.quitar({ nombre: nombre, precio: precio });
}

function buscar_Prod() {
    let nombre = prompt("Ingrese el nombre del producto que desea buscar: ");

    carrito.buscar(nombre);
}

function cantidadProductos() {
    alert("Usted tiene " + carrito.productos.length + " productos");
}


