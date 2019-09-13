function MudaBg(){
    var v = document.getElementById("img").value;
    document.body.style.backgroundImage = "url('img/img0"+v+".jpg')";
    document.body.style.backgroundAttachment = "Fixed";
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundRepeat = "no-repeat";
    if(v==2){
        document.body.style.backgroundColor = "rgb(50,58,69)";
    }else{
        document.body.style.backgroundColor = "black";
    }
}
var k = 0;
function Mudabg(){
    k++;
    if(k>12){
        k = 1;
    }
    document.body.style.backgroundImage = "url('img/img0"+k+".jpg')";
    document.body.style.backgroundAttachment = "Fixed";
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundRepeat = "no-repeat";
    if(k==2){
        document.body.style.backgroundColor = "rgb(50,58,69)";
    }else{
        document.body.style.backgroundColor = "black";
    }
    
    setTimeout('Mudabg()',3000)
}

function MudaBG(Y){
    
    document.body.style.backgroundImage = "url('img/img0"+Y+".jpg')";
    document.body.style.backgroundAttachment = "Fixed";
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundRepeat = "no-repeat";
    if(Y==2){
        document.body.style.backgroundColor = "rgb(50,58,69)";
    }else{
        document.body.style.backgroundColor = "black";
    }
}