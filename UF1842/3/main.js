let vueltas = 0;
while (vueltas < 20) {
    console.log("Vuelta: " + vueltas);
    vueltas++;
}

// Bucle infinito
let contador = 0;
console.log("Antes del bucle")
while (true) {
    console.log("Contador: " + contador);
    contador++;
    // Si el if se cumple se termina el bucle
    if (contador == 7) {
        break;
    }
}
console.log("Después del bucle");

let atras = 10;
while (atras >= 0) {
    console.log("Atrás: " + atras);
    atras--;
}
console.log("Feliz Año Nuevo");

atras = 10;
console.log("Inicio bucle...");
while (true) {
    console.log("Atrás: " + atras);
    atras--;
    if (atras < 0) {
        break;
    }
}
console.log("Feliz Año Nuevo");

let ct = -1;
while (ct <= 20) {
    ct++;
    if(ct%2 == 1) {
        continue;
    }
    console.log("Número: " + ct);
}
console.log("Se acabó");