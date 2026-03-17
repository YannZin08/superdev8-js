const botaoSalvar = document.getElementById("salvar");
const tbody = document.getElementById("tabela-produtos");

let id = 1

botaoSalvar.addEventListener("click", salvarCadastro);

function salvarCadastro() {

    const campoNome = document.getElementById("campo-nome");
    const campoCategoria = document.getElementById("campo-categoria");
    const campoPreco = document.getElementById("campo-preco");
    const campoQuantidade = document.getElementById("campo-quantidade");

    const nome = campoNome.value.trim();
    const categoria = campoCategoria.value.trim();
    const preco = parseFloat(campoPreco.value);
    const quantidade = parseInt(campoQuantidade.value);

    const valorTotal = preco * quantidade;

    criarLinha(nome, categoria, preco, quantidade, valorTotal);
}

function criarLinha(nome, categoria, preco, quantidade, valorTotal) {
    const linha = `<tr>
        <td>${id}</td>
        <td>${nome}</td>
        <td>${categoria}</td>
        <td>R$ ${preco.toFixed(2)}</td>
        <td>${quantidade}</td>
        <td>R$ ${valorTotal.toFixed(2)}</td>
    </tr>`;

    tbody.innerHTML += linha;

    id += 1;
}