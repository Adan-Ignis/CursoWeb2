const consumos = [28, 35, 22, 40, 31, 18, 25]

function analizarConsumo(consumos) {
    const consumoAlto = 30
    let diaConsumoAlto
    let consumoTotal
    let menorConsumo
    let salida = []

    consumos.forEach(element => {
        if (consumoAlto > element) {
            diaConsumoAlto++
        }
        consumoTotal += element
    });
    menorConsumo = Math.min(consumos)

    salida.push(diaConsumoAlto, consumoTotal, menorConsumo)

    return salida
}

console.log(analizarConsumo(consumos))

// salida esperada: [3, 199, 181]