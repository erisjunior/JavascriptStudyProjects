document.getElementById("Arrox").classList.add("esconde");
document.getElementById("Feixjao").classList.add("esconde");
document.getElementById("Bixcoito").classList.add("esconde");
document.getElementById("Axucar").classList.add("esconde");
document.getElementById("Cuxcux").classList.add("esconde");

var soma = 0;

function add(a){
    var tr = document.getElementById(a);
    tr.classList.remove("esconde");

    var tdquant = tr.querySelector(".preco"); 
    var quant = parseInt(tdquant.innerHTML);
    quant++;
    tdquant.innerHTML = quant;

    var tdpreco = tr.querySelector(".prec"); 
    var preco = parseFloat(tdpreco.innerHTML);

    soma += preco;

    document.getElementById("total").innerHTML = "R$ "+soma.toFixed(2);
}

function menos(a){
    var tr = document.getElementById(a);

    var tdquant = tr.querySelector(".preco"); 
    var quant = parseInt(tdquant.innerHTML);
    quant = quant -1;
    tdquant.innerHTML = quant;

    if(quant<1){
        tr.classList.add("esconde");
    }

    var tdpreco = tr.querySelector(".prec"); 
    var preco = parseFloat(tdpreco.innerHTML);

    soma -= preco;

    document.getElementById("total").innerHTML = "R$ "+soma.toFixed(2);
}