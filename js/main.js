const productos = ["Computadora", "Celular", "Tablet", "Televisor", "Auriculares"];

function listaNumerada(titulo, productos) {
    console.log(titulo.toUpperCase());

    let contador = 1;
    for (const producto of productos) {
        console.log(contador + " - " + producto);
        contador++;
    }
    console.log("Total de productos: " + productos.length);
}

listaNumerada("Lista de productos electrónicos", productos);

const productoEliminado = productos.pop();
console.log("Se eliminó el producto: " + productoEliminado);

productos.push("Smartwatch");
console.log("Se agregó un nuevo producto al final: " + productos[productos.length - 1]);

productos.unshift("Proyector");
console.log("Se agregó un nuevo producto al inicio: " + productos[0]);

listaNumerada("Lista actualizada de productos electrónicos", productos);

const productosMinusculas =[];
for (const prod of productos) {
    productosMinusculas.push(prod.toLocaleLowerCase());
}

let encontrado = false;
let productoEncontrado = "";
let indiceEncontrado = -1;

while (!encontrado) {
    const productoBuscado = prompt("Ingrese el nombre del producto que desea buscar:");

    if (productoBuscado === null) {
        alert("Búsqueda cancelada.");
        break;
    }
    const busqueda = productoBuscado.trim().toLowerCase();

    if (busqueda !== "" && productosMinusculas.includes(busqueda)) {
        indiceEncontrado = productosMinusculas.indexOf(busqueda);
        productoEncontrado = productos[indiceEncontrado];

        encontrado = true;
    } else {
        alert("El producto " + busqueda + " no se encuentra en la lista. Por favor intenta de nuevo.");
    }
}
if (encontrado) {
    const posicionLista = indiceEncontrado + 1;

    alert("El producto " + productoEncontrado + " se encuentra en la lista en la posición: " + posicionLista + " (índice: " + indiceEncontrado + ")");
    console.log("El producto " + productoEncontrado + " se encuentra en la lista en la posición: " + posicionLista + " (índice: " + indiceEncontrado + ")");
}

const indiceActualizado = 2;
const nuevoProducto = "Microondas";

productos.splice(indiceActualizado, 1, nuevoProducto);
console.log("Se actualizó la posición 3 (índice: " + indiceActualizado + ") por el nuevo producto: " + nuevoProducto + ".");

listaNumerada("Lista de productos final", productos);
