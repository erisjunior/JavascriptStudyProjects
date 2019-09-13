function Mostra() {
	var a = document.getElementById('mostra').style.display = "block";
	document.getElementById('oculta').style.display = a;
}
function Oculta() {
	document.getElementById('oculta').style.display = "none";	
}
function Mudacor() {
	var cores = Array('green', 'blue', 'cyan', 'yellow','red', 'black','#ccc');
	var cor = Math.random()*7;
	Cor = cor.toFixed(0); 
	document.body.style.background = cores[Cor];
}