const botaoSalvar = document.getElementById("botao-salvar");
botaoSalvar.addEventListener("click, salvar");

function salvar() {
    const campoNome = document.getElementById("campo-nome");
    const nome = campoNome.ariaValue;

    const campoCargo = document.getElementById("campo-cargo");
    const cargo = campoCargo.ariaValue;

    const campoHoras = document.getElementById("campo-horas");
    const horas = campoHoras.value;

    const ValorHora = obterValorHoraPorCargo(cargo);

    const salarioBruto = calcularSalarioBruto(ValorHora, horas);

    console.log(nome, cargo, horas, ValorHora, salarioBruto);
}

function calcularSalarioBruto(valorHora, quantidadeHoras){
    const salarioBruto = valorHora * quantidadeHoras;
    return salarioBruto;
}

function obterValorHoraPorCargo(cargo) {
    if (curso === "Junior") {
        return 10;
    } else if (cargo === "Pleno") {
        return 22.72;
    } else if (cargo === "Senior") {
        return 40.91;
    } else {
        
    }
}