var estado = false;
var text = "";
var esta = true;

function botao() {
    if (esta == false){
        
    }else{
        var n =(Math.random()*10);
        var N =n.toFixed(0);

        if(N==10){
            queima();
        }else{
            if (estado == false) {
                document.getElementById("lampada").src = "img/LampOn.jpg";
                estado = true;
                document.getElementById("btn").value = "Desligar";
            } else if (estado == true) {
                document.getElementById("lampada").src = "img/LampOff.jpg";
                estado = false;
                document.getElementById("btn").value = "Ligar";
            }
        }
    }
}

var conta = 0;

function queima(){
    conta++;
    if(conta > 100){
        document.getElementById("lampada").src = "img/LampOff.jpg";
        estado = false;
        document.getElementById("btn").value = "Queimou";
        document.getElementById("btn2").value = "Queimou";
        esta = false;
        alert('Queimou');
    }else{
        if (estado == false) {
            document.getElementById("lampada").src = "img/LampOn.jpg";
            estado = true;
            document.getElementById("btn").value = "Desligar";
        } else if (estado == true) {
            document.getElementById("lampada").src = "img/LampOff.jpg";
            estado = false;
            document.getElementById("btn").value = "Ligar";
        }
        setTimeout('queima()',10);
    }
}

function pisca(){
    if(esta == false){
        
    }else{
        if (estado == false) {
            document.getElementById("lampada").src = "img/LampOn.jpg";
            estado = true;
            document.getElementById("btn").value = "Desligar";
        } else if (estado == true) {
            document.getElementById("lampada").src = "img/LampOff.jpg";
            estado = false;
            document.getElementById("btn").value = "Ligar";
        }
        setTimeout('pisca()',1)
    }
}

function Cor1() {
    var cor = document.getElementById("Co1").value;
    if(cor==0){
        document.getElementById("C1").style.background = "black";
    }else if(cor==1){
        document.getElementById("C1").style.background = "brown";
    }else if(cor==2){
        document.getElementById("C1").style.background = "red";
    }else if(cor==3){
        document.getElementById("C1").style.background = "orange";
    }else if(cor==4){
        document.getElementById("C1").style.background = "yellow";
    }else if(cor==5){
        document.getElementById("C1").style.background = "green";
    }else if(cor==6){
        document.getElementById("C1").style.background = "blue";
    }else if(cor==7){
        document.getElementById("C1").style.background = "purple";
    }else if(cor==8){
        document.getElementById("C1").style.background = "gray";
    }else if(cor==9){
        document.getElementById("C1").style.background = "white";
    }
}

function Cor2() {
    var cor = document.getElementById("Co2").value;
    if(cor==0){
        document.getElementById("C2").style.background = "black";
    }else if(cor==1){
        document.getElementById("C2").style.background = "brown";
    }else if(cor==2){
        document.getElementById("C2").style.background = "red";
    }else if(cor==3){
        document.getElementById("C2").style.background = "orange";
    }else if(cor==4){
        document.getElementById("C2").style.background = "yellow";
    }else if(cor==5){
        document.getElementById("C2").style.background = "green";
    }else if(cor==6){
        document.getElementById("C2").style.background = "blue";
    }else if(cor==7){
        document.getElementById("C2").style.background = "purple";
    }else if(cor==8){
        document.getElementById("C2").style.background = "gray";
    }else if(cor==9){
        document.getElementById("C2").style.background = "white";
    }
}

function Cor3() {
    var cor = document.getElementById("Co3").value;
    if(cor==0){
        document.getElementById("C3").style.background = "black";
    }else if(cor==1){
        document.getElementById("C3").style.background = "brown";
    }else if(cor==2){
        document.getElementById("C3").style.background = "red";
    }else if(cor==3){
        document.getElementById("C3").style.background = "orange";
    }else if(cor==4){
        document.getElementById("C3").style.background = "yellow";
    }else if(cor==5){
        document.getElementById("C3").style.background = "green";
    }else if(cor==6){
        document.getElementById("C3").style.background = "blue";
    }else if(cor==7){
        document.getElementById("C3").style.background = "purple";
    }else if(cor==8){
        document.getElementById("C3").style.background = "gray";
    }else if(cor==9){
        document.getElementById("C3").style.background = "white";
    }
}