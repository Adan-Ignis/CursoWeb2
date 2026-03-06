for (let i = 0; i < 10; i += 2) {
    console.log("Vuelta " + i);
}

for (let i = 10; i > 0; i--) {
    console.log("Atrás: " + i);
}

for (let i = 0, j = 10; i < 10; i++, j--) {
    if (j == 5) {
        continue;
    }
    if (i == 7) {
        break;
    }
    console.log("i: " + i + " j: " + j);
}

for (let fila = 0; fila < 10; fila++) {
    for (let col = 0; col < 10; col++) {
        console.log("Fila: " + fila + " Columna: " + col);
    }
}