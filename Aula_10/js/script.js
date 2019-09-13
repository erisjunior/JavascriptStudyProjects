var poltronas = [false,false,false,false,false,false,false,false,
                false,false,false,false,false,false,false,false];

function MostraPoltrona(){
    var p = document.getElementsByTagName("img");
    
    for (var o = 0; o<p.length; o++){
        if(poltronas[o] == false){
            p[o].src = "img/poltrona_livre.png";
        } else{
            p[o].src = "img/poltrona_ocupada.png";
        }
    
    }
}

function SelecionaPoltrona(){
    var p = document.getElementsByTagName("img");
    
    for (var o = 0; o<p.length; o++){
        
        if(poltronas[o]){
            p[o].src = "img/poltrona_ocupada.png";
        }else{
            
            var resp = confirm("Deseja a "+(o+1)+"º poltrona?")
            if(resp){
                poltronas[o] = true;
                p[o].src = "img/poltrona_ocupada.png";
                break;
            }
        }
        
    }
}

function SelecionaPoltronaA(){
    var p = document.getElementsByTagName("img");
    var o = 0;
    while (o <1){
        i = (Math.random()*16).toFixed(0);
        if(poltronas[i]){
            p[i].src = "img/poltrona_ocupada.png";
        }else{
            
            var resp = confirm("Deseja a "+(parseInt(i)+1)+"º poltrona?")
            if(resp){
                poltronas[i] = true;
                p[i].src = "img/poltrona_ocupada.png";
                break;
            }
        }
        
    }
}

function EscolhePoltrona(I){
    var p = document.getElementsByTagName("img");
    
    if(poltronas[I]){ 
        p[I].src = "img/poltrona_ocupada.png";
        alert("Está ocupada");
    }else{
        var resp = confirm("Deseja a "+(parseInt(I)+1)+"º poltrona?")
        if(resp){
            poltronas[I] = true;
            p[I].src = "img/poltrona_ocupada.png";
        }
    }
}

function Limpar(){
    var p = document.getElementsByTagName("img");
    
    for(var i = 0; i<p.length; i++){
        p[i].src = "img/poltrona_livre.png";
        poltronas[i] = false;
    }
}