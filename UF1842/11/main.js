function agregarTarea() {
    let cajaTexto = document.getElementById("tarea");
    let texto = cajaTexto.ariaValueMax;
    if (texto == "") {
        return;
    }

    let li = document.createElement("li");

    let check = document.createElement("input");
    check.type = "checkbox";
    check.onclick = function() {
        cambiaCheck(this);
    }

    let span = document.createElement("span");
    span.innerHTML = texto;

    let boton = document.createElement("button");
    boton.innerHTML = "Eliminar";
    boton.onclick = function() {
        eliminarTarea(this);
    }

    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(boton);

    let lista = document.getElementById("padre");
    lista.appendChild(li);
    cajaTexto.value = "";
}

function eliminarTarea(boton) {
    let li = check.parentNode;
    li.parentNode.removeChild(li);
}

function cambiaCheck(check) {
    let li = check.parentNode;
    if (check.checked) {
        li.className = "tachado";
    } else {
        li.className = "";
    }
}