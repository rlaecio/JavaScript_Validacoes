function cerificaChute(chute) {
    const numero = +chute

    if(chuteForValido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    }

    if (numeroMaioOuMenor(numero)) {
        elementoChute.innerHTML += `<
            div>Valor inválido: Fale um numero entre 
            ${menorValor} e ${maiorValor}</div>`
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2> Você acertou !</h2>
            <h3> O numero secreto era ${numeroSecreto}</h3>
        `
    }
}

function chuteForValido(numero) {
    return Number.isNaN(numero)
}

function numeroMaioOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}
