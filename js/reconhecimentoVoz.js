const elementoChute  = document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br',
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
   chute = e.results[0][0].transcript;
   exibeChuteNaTela(chute)
}

function exibeChuteNaTela() {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
        <div>O numero secreto é <i class="fa-solid fa-arrow-up"></i></div>
    `
}