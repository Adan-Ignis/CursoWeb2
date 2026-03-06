let productos = document.querySelectorAll(".producto");
let total = document.getElementById("total");
let lista_carrito = document.getElementById("lista");

for (let i = 0; i < productos.length; i++) {
    let boton = productos[i].querySelector(".boton_comprar");
    let precio = productos[i].getElementById("total");
    console.log(precio);
    let nombre = productos[i].querySelector(".nombre");
    boton.addEventListener("click", function() {
        let li = document.createElement("li");
        li.innerHTML = nombre.textContent + " " + precio + "€";
        lista_carrito.appendChild(li);
        total.innerHTML = (parseFloat(precio) + parseFloat(total.innerHTML)).toFixed(2);
    })
}

let pagar = document.getElementById("pagar");
pagar.addEventListener("click", function() {
    lista_carrito.innerHTML = "";
    total.innerHTML = "0.0";
})