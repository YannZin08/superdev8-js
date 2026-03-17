const botaoSalvar = document.getElementById("salvar");
const tbody = document.getElementById("tabela-livros");

let id = 1;

botaoSalvar.addEventListener("click", salvarCadastro);

function salvarCadastro() {

    const campoTitulo = document.getElementById("campo-titulo");
    const campoAutor = document.getElementById("campo-autor");
    const campoPaginas = document.getElementById("campo-paginas");
    const campoAno = document.getElementById("campo-ano");

    const titulo = campoTitulo.value.trim();
    const autor = campoAutor.value.trim();
    const paginas = parseInt(campoPaginas.value);
    const ano = parseInt(campoAno.value);

    let classificacao;

    if (ano < 2010) {
        classificacao = "Livro antigo";
    } else {
        classificacao = "Livro recente";
    }

    criarLinha(titulo, autor, paginas, ano, classificacao);
}

function criarLinha(titulo, autor, paginas, ano, classificacao) {

    const linha = `<tr>
        <td>${id}</td>
        <td>${titulo}</td>
        <td>${autor}</td>
        <td>${paginas}</td>
        <td>${ano}</td>
        <td>${classificacao}</td>
    </tr>`;

    tbody.innerHTML += linha;

    id += 1;
}