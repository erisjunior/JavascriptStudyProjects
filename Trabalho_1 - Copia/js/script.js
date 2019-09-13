function load(){
    window.parent.document.getElementById("nomedoiframe").height = document.getElementById("suadiv").scrollHeight + 40;
}

var k = 0
function Mudabg(){
    k++;
    if(k>7){
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
    
    setTimeout('Mudabg()',5000);
}