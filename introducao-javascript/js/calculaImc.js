var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var alturaValida = validaAltura(altura);
    var pesoValida = validaPeso(peso);

    var tdImc = paciente.querySelector(".info-imc");

    if (!pesoValida) {
        console.log("Peso Invalido")
        pesoValida = false;
        tdImc.textContent = "Peso Invalido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        console.log("Altura Invalido")
        alturaValida = false;
        tdImc.textContent = "Altura Invalido";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaValida && pesoValida) {
        
        var imc = calcImc(peso,altura);

        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if (peso < 500 && peso >= 0){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura < 2.5 && altura >= 0){
        return true;
    }else{
        return false;
    }
}

function calcImc(peso,altura){

    var imc = 0;
    
    imc = peso / (altura * altura);
    
    return imc.toFixed(2);
}