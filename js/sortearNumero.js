const menorValor = 10;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto)

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor
