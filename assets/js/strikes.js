const botaoVerificar = document.getElementById('botaoVerificar');
const resultado = document.getElementById('resultado');

botaoVerificar.addEventListener('click', function() {
    const nick = document.getElementById('nick').value.trim();
    const strikes = parseInt(document.getElementById('strikes').value);

    if (!nick) {
        resultado.innerText = "Por favor, digite um nick.";
        return;
    }

    if (isNaN(strikes) || strikes < 0) {
        resultado.innerText = "Digite uma quantidade de strikes válida.";
        return;
    }

    if (strikes >= 3) {
        resultado.innerText = `O usuário "${nick}" foi banido do canal!`;
    } else {
        resultado.innerText = `O usuário "${nick}" tem ${strikes} strike(s).`;
    }
});