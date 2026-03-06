let color1 = "red";
let color2 = "green";

function cambiaColor() {
    let btn = document.getElementById("ej1");
    let colorActual = btn.style.backgroundColor;
    // console.log(colorActual);
    if (colorActual == color1) {
        btn.style.backgroundColor = color2;
    } else {
        btn.style.backgroundColor = color1;
    }
}

function mostrarMensaje() {
    let parrafo = document.getElementById("ej2");
    if (parrafo.style.backgroundColor == "yellow") {
        parrafo.style.backgroundColor = "";
    } else {
        parrafo.style.backgroundColor = "yellow";
    }
}

let p2 = document.getElementById("parr2");

p2.addEventListener("mousemove", ponerAmarillo);
p2.addEventListener("mouseleave", quitarAmarillo);

function ponerAmarillo() {
    p2.style.backgroundColor = "yellow";
}

function quitrAmarillo() {
    p2.style.backgroundColor = "";
}

let contador = 0;
let texto = document.getElementById("ej3");
let total = document.getElementById("total");

total.addEventListener("keyup", cuentaTeclas);
total.addEventListener("focus", ponerBorde);
total.addEventListener("blur", quitarBorde);

function cuentaTeclas() {
    contador++;
    total.innerHTML = contador;
}

function ponerBorde() {
    texto.style.border = "12px solid red";
    texto.style.borderColor = "yellow";
    texto.style.borderWidth = "20px";
}

function quitarBorde() {
    texto.style.border = "";
}