const botaoSalvar = document.getElementById("salvar");
const tbody = document.getElementById("tabela-alunos");

let id = 1;

botaoSalvar.addEventListener("click", salvarCadastro);

function salvarCadastro() {

    const campoNome = document.getElementById("campo-nome");
    const campoNota1 = document.getElementById("campo-nota1");
    const campoNota2 = document.getElementById("campo-nota2");
    const campoNota3 = document.getElementById("campo-nota3");

    const nome = campoNome.value.trim();
    const nota1 = parseFloat(campoNota1.value);
    const nota2 = parseFloat(campoNota2.value);
    const nota3 = parseFloat(campoNota3.value);

    const media = (nota1 + nota2 + nota3) / 3;

    let situacao;

    if (media >= 7) {
        situacao = "Aprovado";
    } else {
        situacao = "Reprovado";
    }

    criarLinha(nome, nota1, nota2, nota3, media, situacao);
}

function criarLinha(nome, nota1, nota2, nota3, media, situacao) {

    const linha = `<tr>
        <td>${id}</td>
        <td>${nome}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${nota3}</td>
        <td>${media.toFixed(2)}</td>
        <td>${situacao}</td>
    </tr>`;

    tbody.innerHTML += linha;

    id += 1;
}
