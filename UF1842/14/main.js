let txt = document.getElementById("texto");

txt.addEventListener("keydown", function (e) {
    console.log("Tipo: " + e.type);
    console.log("Target: " + e.target);
    console.log("Current: " + e.currentTarget);
    console.log("Ratón X: " + e.clientX);
    console.log("Ratón Y: " + e.clientY);
    console.log("Tecla: " + e.key);
    console.log("Carácter: " + e.code);
})

let btn = document.getElementById("tempo");

btn.addEventListener("click", function () {
    let contador = 0;
    let t = setInterval(incremental, 1000);

    function incremental() {
        if (contador == 100) {
            clearInterval(t);
        } else {
            contador++;
            btn.textContent = "Espera " + (100 - contador) + " segundos";
        }
    }
})