function crearMensaje() {
    var mensaje = "Segundo mensaje";
    alert(mensaje);
}

let nota = 7.5;
if (nota < 5) {
    console.log("Suspenso")
} else if (nota < 6) {
    console.log("Aprobado");
} else if (nota < 7) {
    console.log("Bien");
} else if (nota < 9) {
    console.log("Notable");
} else {
    console.log("Sobresaliente");
}

let diaSemana = 10;
switch (diaSemana) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
}

let cantidad = 0;
let vacio = !cantidad;

console.log("Cantidad: " + cantidad);
console.log("Vacio: " + vacio);

let mensaje = "Hola Mundo";
let sinMensaje = !mensaje;
let conMensaje = !sinMensaje;
console.log("Sin mensaje: " + sinMensaje);
console.log("Con mensaje: " + conMensaje);