const botaoSalvar = document.getElementById("salvar");
const tbody = document.getElementById("tabela-veiculos");

let id = 1;

botaoSalvar.addEventListener("click", salvarCadastro);

function salvarCadastro() {

    const campoModelo = document.getElementById("campo-modelo");
    const campoMarca = document.getElementById("campo-marca");
    const campoAno = document.getElementById("campo-ano");
    const campoValor = document.getElementById("campo-valor");
    const campoPortas = document.getElementById("campo-portas");

    const modelo = campoModelo.value.trim();
    const marca = campoMarca.value.trim();
    const ano = parseInt(campoAno.value);
    const valor = parseFloat(campoValor.value);
    const portas = parseInt(campoPortas.value);

    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - ano;

    criarLinha(modelo, marca, ano, valor, portas, idade);
}

function criarLinha(modelo, marca, ano, valor, portas, idade) {

    const linha = `<tr>
        <td>${id}</td>
        <td>${modelo}</td>
        <td>${marca}</td>
        <td>${ano}</td>
        <td>R$ ${valor.toFixed(2)}</td>
        <td>${portas}</td>
        <td>${idade} anos</td>
    </tr>`;

    tbody.innerHTML += linha;

    id += 1;
}