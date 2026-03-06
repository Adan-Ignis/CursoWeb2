// Definición
let vacio = ["p", "q"];
let numero = [1, 2, 3, 4];
let func = new Array(1, 2, 3, 4);

// Operador propagación "spread"
let prop = [100, 200, 300, ...vacio, 888, 999];

prop[0] = 0;
prop[100] = 9;

let letras = [..."Hola Mundo"];

function toString(lista) {
    let salida = "";
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] < salida) {
            salida = lista[i];
        }
    }
    return salida;
}

let datos = [90, 2, 34, 1, 555, 6, 7, 3, 0];

// Crear un array con cinco valores numéricos. Comprobar si son todos positivos. Devolver el producto de todos los positivos del array.
function producto(lista) {
    let salida = 1;
    let actual = 0;
    for (let i = 0; i < lista.length; i++) {
        actual = lista[i];
        if (actual >= 0) {
            salida = salida * actual;
        }
    }
    return salida;
}

let cinco = [12, 3, -2, 7, -1];
console.log(producto(cinco));