function cerificaChute(chute) {
    const numero = +chute

    if(chuteForValido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroMaioOuMenor(numero)) {
        elementoChute.innerHTML += `<
            div>Valor inválido: Fale um numero entre 
            ${menorValor} e ${maiorValor}</div>`
            return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2> Você acertou !</h2>
            <h3> O numero secreto era ${numeroSecreto}</h3>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O numero secreto é menor <i class="fa-solid fa-arrow-dow"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O numero secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }


}

function chuteForValido(numero) {
    return Number.isNaN(numero)
}

function numeroMaioOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}
