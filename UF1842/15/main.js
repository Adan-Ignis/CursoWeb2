let manejador;

function mostrarFecha() {
    let fecha = new Date();
    let hora = fecha.getHours();
    let minuto = fecha.getMinutes();
    let segundo = fecha.getSeconds();
    let diames = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let diasemana = fecha.getDay();

    let spanHora = document.getElementById("hora");
    let spanMinutos = document.getElementById("minuto");
    let spanSegundos = document.getElementById("segundo");
    let spanDiames = document.getElementById("diames");
    let spanMes = document.getElementById("mes");
    let spanDiaSemana = document.getElementById("diasemana");

    spanHora.innerHTML = hora.toString.padStart(2, "0");
    spanMinutos.innerHTML = String(minuto).padStart(2, "0");
    spanSegundos.innerHTML = segundo.toString.padStart(2, "0");
    spanDiames.innerHTML = diames.toString.padStart(2, "0");
    spanMes.innerHTML = mes.toString.padStart(2, "0");
    spanDiaSemana.innerHTML = diasemana.toString.padStart(2, "0");
}

function iniciar() {
    mostrarFecha();
    manejador = setInterval(mostrarFecha, 1000);
}

function parar() {
    clearInterval(manejador);
}

function diasemana(numDia) {
    let semana = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
    return semana[numDia];
}