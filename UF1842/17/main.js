let tabs = document.querySelectorAll(".tab");
let contenidos = document.querySelectorAll(".tab-content");
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
            contenidos[j].classList.remove("active");
        }

        this.classList.add("active");
        let targetId = this.getAttribute("data-target");
        let targetContent = document.getElementById(targetId);
        targetContent.classList.add("active");
    });
}

window.addEventListener("scroll", function() {
    let scrolled = window.screenY;
    let altura = document.body.scrollHeight - window.innerHeight;
    let porcentaje = scrolled / altura;
    document.getElementById("scrollbar").style.width = porcentaje * 100 + "%";
    document.getElementById("gris").style.width = scrolled ? "100" : "0";

    let flecha = document.querySelector(".flecha");
    if (porcentaje > 0.2) {
        flecha.style.display = "block";
    } else {
        flecha.style.display = "none";
    }
});

const boton = document.getElementById("btn_tema");
boton.addEventListener("click", function() {
    document.body.classList.toggle("oscuro");

    boton.textContent = document.body.classList.contains("oscuro") ? "Tema Claro" : "Tema Oscuro";
})

let cuadroTexto = document.getElementById("cuadro");
let cuentaTexto = document.getElementById("cuenta");
let historial = [];

cuadroTexto.addEventListener("input", function () {
    cuentaTexto.innerHTML = cuadroTexto.value.length;
    historial.push(cuadroTexto.value);
});

let btn_desh = document.getElementById("btnDeshacer");
btn_desh.addEventListener("click", function () {
    historial.pop();
    cuadroTexto.value = historial.slice(-1) || "";
    cuentaTexto.innerHTML = cuadroTexto.value.length;
})