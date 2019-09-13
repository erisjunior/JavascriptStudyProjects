var c = 100;
var d = 0;

function Inicio() {
    if(c > 0 && d <100){
        c--;
        var cont = document.getElementById("contador1");
        cont.innerText = c;

        d++;
        var cont1 = document.getElementById("contador2");
        cont1.innerText = d;

        setTimeout('Inicio()',1000);
    }else{
        alert('Oi')
    }
}
