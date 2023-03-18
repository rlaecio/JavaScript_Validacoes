function cerificaChute(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "FIM DO JOGO") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `               
        } else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
        
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

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O numero secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O numero secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaioOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', (e) => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
