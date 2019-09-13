var botaoAdd = document.querySelector("#adicionar-paciente");

botaoAdd.addEventListener("click", function (event) {

    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemInformacoesDoPaciente(form);

    var pacienteTr = montaTr(paciente);
    
    var err = validaPaciente(paciente);
    
    if(err.length > 0){
        exibeMensagensDeErro(err);
        return;
    }

    resetaUl();
    
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
});



function obtemInformacoesDoPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    
    var erros = [];
    
    if(paciente.nome.length == 0) erros.push("Insira um nome");
    if(paciente.gordura.length == 0) erros.push("Insira a gordura");
    if(paciente.peso.length == 0) erros.push("Insira o peso");
    if(paciente.altura.length == 0) erros.push("Insira a altura");
    
    if(!validaPeso(paciente.peso)) erros.push("O peso é invalido");
    
    if(!validaAltura(paciente.altura)){
        erros.push("A altura é invalida");
    }
    
    return erros;
}

function exibeMensagensDeErro(err){
    ul = usaUl();
    
    err.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function usaUl(){
    var ul = document.querySelector("#mensagem-erro");
    
    ul.innerHTML ="";
    
    return ul;
}