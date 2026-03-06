// Ejercicio 1
function area(base, altura) {
    let resultado = base * altura;
    return resultado;
}

// Ejercicio 2
function tablaMul(factor) {
    for (let i = 1; i <= 10; i++) {
        console.log(factor + " * " + i + " = " + factor * i);
    }
}

// Ejercicio 3
function cuentaVocales(cadena) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        switch (cadena[i].toLowerCase()) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                contador ++;
                break;
        }
    }
    return contador;
}

function cuentaVocales2(cadena) {
    let contador = 0;
    for (let letra of cadena) {
        if (vocales.includes(letra.toLowerCase())) {
            contador ++;
        }
    }
    return contador;
}

function cuentaVocales3(cadena) {
    let contador = [0, 0, 0, 0, 0];

    for(let i = 0; i < cadena.length; i++) {
        switch (cadena[i].toLowerCase()) {
            case "a":
                contador[0]++;
                break;
            case "e":
                contador[1]++;
                break;
            case "i":
                contador[2]++;
                break;
            case "o":
                contador[3]++;
                break;
            case "u":
                contador[4]++;
                break;
        }
    }
}

// Ejercicio 4
function positivos(lista) {
    let salida = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] >= 0) {
            salida.push(lista[i]);
        }
    }
    return salida;
}

// Ejercicio 5
function sumaImpares(numero) {
    let resultado = 0;
    for(let i = 1; i < numero; i += 2) {
        resultado += i;
    }
    return resultado;
}

function sumaImpares2(numero) {
    let resultado = 0;
    for(let i = 0; i < numero; i++) {
        if (i % 2 == 1) {
            resultado += i;
        }
    }
    return resultado;
}

// Ejercicio 6
function dosArrays(lista1, lista2) {
    let salida = [];
    for(let num of lista1) {
        if (lista2.includes(num) && !salida.includes(num)) {
            salida.push(num);
        }
    }
    return salida;
}

// Ejercicio 7
function digitos(numero) {
    return numero.toString().length;
}

// Ejercicio 8
function cadenaMayor(cadenas) {
    let salida = "";
    for(let cadena of cadenas) {
        if (salida.length < cadena.length) {
            salida = cadena;
        }
    }
    return salida;
}