function sumar(a, b) {
    let total = a + b;
    return total;
}

let z = 6, q = 8;
let resultado = sumar(z, q);
console.log(resultado);


function mayor(primero, segundo) {
    if (primero > segundo) {
        console.log("El número " + primero + " es mayor que " + segundo);
    } else if (segundo > primero) {
        console.log("El número " + segundo + " es mayor que " + primero);
    } else {
        console.log("Los dos son iguales");
    }
}
mayor(9, 9);

function menor(primero, segundo) {
    if (primero > segundo) {
        return primero + " es mayor que " + segundo;
    }
    if (segundo > primero) {
        return segundo + " es mayor que " + primero;
    }
    return "Son iguales";
}
let salida = menor(80, 80);
console.log(salida);

// Función recibe una cadena de texto y devuelva su longitud
function largo(cadena) {
    let letra = "";
    let indice = 0;
    while (letra != "$") {
        letra = cadena[indice];
        console.log(letra);
        indice++;
    }
    return(indice - 1);
}
let rdo = largo("esta es una prueba$");
console.log(rdo);