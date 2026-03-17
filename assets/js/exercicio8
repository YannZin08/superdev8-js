const botaoSalvar = document.getElementById("salvar");
const tbody = document.getElementById("tabela-funcionarios");

let id = 1;

botaoSalvar.addEventListener("click", salvarCadastro);

function salvarCadastro() {

    const campoNome = document.getElementById("campo-nome");
    const campoCargo = document.getElementById("campo-cargo");
    const campoSalario = document.getElementById("campo-salario");
    const campoFilhos = document.getElementById("campo-filhos");

    const nome = campoNome.value.trim();
    const cargo = campoCargo.value.trim();
    const salario = parseFloat(campoSalario.value);
    const filhos = parseInt(campoFilhos.value);

    const auxilio = filhos * 150;
    const salarioFinal = salario + auxilio;

    criarLinha(nome, cargo, salario, filhos, auxilio, salarioFinal);
}

function criarLinha(nome, cargo, salario, filhos, auxilio, salarioFinal) {

    const linha = `<tr>
        <td>${id}</td>
        <td>${nome}</td>
        <td>${cargo}</td>
        <td>R$ ${salario.toFixed(2)}</td>
        <td>${filhos}</td>
        <td>R$ ${auxilio.toFixed(2)}</td>
        <td>R$ ${salarioFinal.toFixed(2)}</td>
    </tr>`;

    tbody.innerHTML += linha;

    id += 1;
}