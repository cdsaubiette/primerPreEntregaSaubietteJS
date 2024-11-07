// agrega productos al carrito
function agregarCarrito(precio, total) {
    total += precio;  // Suma el precio al total
    return total;  // Retorna el nuevo total
}

// calcular total con impuestos
function calcularImpuesto(total) {
    return total * 1.21;  // Calculamos el impuesto (21%)

}

/* 
¿Cuándo corresponde cobrar la percepción de IVA?
Corresponderá efectuar la percepción únicamente cuando el monto de la misma supere los $3.000, 
límite que operará en relación a cada una de las transacciones alcanzadas por el presente régimen. 
*/


// validar si el total aplica para el impuesto
function validarTotal(total) {
    if (total < 3000) {
        console.log("El total es muy bajo para aplicar impuestos.");
        return false;
    }
    return true;
}



// Ciclo para agregar productos 
let total = 0;  // Definimos el total dentro del ciclo para que no sea global

let continuar = true;
while (continuar) {
    let precio = parseFloat(prompt("Ingresa el precio del producto:"));

    // Verificamos si el precio es válido
    if (isNaN(precio) || precio <= 0) {
        alert("Por favor, ingresa un precio válido.");
    } else {
        total = agregarCarrito(precio, total);  // Aquí pasamos total y lo actualizamos
    }

    continuar = confirm("¿Deseas agregar otro producto?");
}

// Después de finalizar la compra, calculamos el total con impuesto
if (validarTotal(total)) {
    const totalPagar = calcularImpuesto(total);
    alert(`El total a pagar con impuestos es: $${totalPagar}`);
} else {
    alert(`El total es demasiado bajo: $${total}`);
}