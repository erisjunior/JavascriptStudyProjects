var pacientes = document.querySelectorAll(".paciente");

var table = document.querySelector("#tabela-pacientes");
table.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
        event.target.parentNode.remove();
    },500)
})