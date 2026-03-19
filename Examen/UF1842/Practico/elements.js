// Ejercicio 1

function ejercicio1(e) {
    e.preventDefault();

    let edad = Number(document.getElementById("edad").value);
    console.log(edad);
    let EJ1resultado = document.getElementById("EJ1resultado");

    // Siempre sale como resultado "Eres menor de edad"
    if (edad >= 18) {
        EJ1resultado.innerHTML = "Eres mayor de edad";
    } else {
        EJ1resultado.innerHTML = "Eres menor de edad";
    }
}

// Ejercicio 2

function ejercicio2() {
    let numeros = [3, 7, 2, 9, 5, 10];
    let sumaTotal = 0;
    let sumaTotalEJ2 = document.getElementById("sumaTotalEJ2");

    // Variables para que se muestre el array en la pagina web
    let EJ2resultado = document.getElementById("EJ2resultado");
    document.getElementById("listaEJ2").remove();

    for (let index = 0; index < numeros.length; index++) {
        sumaTotal += numeros[index];
        let li = document.createElement("li");
        li.textContent = numeros[index];
        EJ2resultado.appendChild(li);
    }

    sumaTotalEJ2.textContent = sumaTotal;
}

// Ejercicio 3

function calcularResultado() {

    // Genera un array con un numero de elementos y contenido generados aleatoriamente
    let vector = [];
    let index = Math.floor(Math.random() * 10) + 1;

    for (let i = 0; i <= index; i++) {
        vector[i] = Math.floor(Math.random() * 11);
    }

    //Muestra los elementos del array generado aleatoriamente
    for (let i = 0; i < vector.length; i++) {
        console.log(vector[i]);
    }

    let media = 0;
    let estado;
    let calificacion;

    //Calcula la media
    for (let index = 0; index < vector.length; index++) {
        media += vector[index];
    }
    media /= vector.length;

    if (media < 5) {
        calificacion = "Insuficiente";
        estado = "Suspenso";
    } if (media >= 5 && media < 7) {
        calificacion = "Suficiente";
        estado = "aprobado";
    } if (media >= 7 && media < 9) {
        calificacion = "Notable";
        estado = "aprobado";
    } if (media >= 9) {
        calificacion = "Sobresaliente";
        estado = "aprobado";
    }

    let arrayEJ4 = [];
    let EJ4resultado = document.getElementById("EJ4resultado");

    arrayEJ4.push(media);
    arrayEJ4.push(estado); 
    arrayEJ4.push(calificacion);
    EJ4resultado.textContent = "Media: " + media + "; estado: " + estado + "; calificación: " + calificacion;

    console.log(EJ4resultado);

}