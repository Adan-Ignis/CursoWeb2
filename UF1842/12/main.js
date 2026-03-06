let verde = document.getElementById("verde");
let azul = document.getElementById("azul");

verde.addEventListener("click", ponerVerde);

azul.addEventListener("click", ponerAzul);
azul.addEventListener("click", chorra);
azul.removeEventListener("click", chorra);

function ponerVerde() {
    document.body.style.backgroundColor = "green";
}
function ponerAzul() {
    document.body.style.backgroundColor = "blue";
}
function chorra() {
    console.log("Nada de nada");
}