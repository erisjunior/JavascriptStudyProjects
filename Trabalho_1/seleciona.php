<!DOCTYPE html>
<html>
<head>
	<title>Manipulando DOM com JS</title>
    <script src="js/script.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <meta charset="utf-8">

</head>
<body onload="Mudabg()">

    <div class="basic container-fluid topo">
        <h2 class="textb"><a href="index.html" class="anima">All-G</a>
            <ul id="menu">
                <li><a href="index.html">NEWS</a></li>
                <li><a href="seleciona.html">DOWNLOADS</a></li>
                <li><a href="seleciona.html">PLAY</a></li>
                <li><a href="#">CONTATE-NOS</a></li>
                <li><input type="search" placeholder="Search" id="busca"></li>
            </ul>
            
            
        </h2>
        
    </div>
    
    <br>

    <div class="basic container-fluid text-center" id="corpo">
        <h3 class="textb">Faça sua escolha: </h3>
        
        <div class="row">
            <div class="col-sm-4 textc"><a href="#" class="anima">Ação</a></div>
            <div class="col-sm-4 textc"><a href="#" class="anima">RPG</a></div>
            <div class="col-sm-4 textc"><a href="#" class="anima">Corrida</a></div>
        </div>
        
            <a href="#"><img class="img-responsive img-thumbnail" src="img/CoD.jpg" alt="Ação" width="30%"></a>

            <a href="#"><img class="img-responsive img-thumbnail" src="img/RPG.jpg" alt="RPG" width="30%"></a>

            <a href="#"><img class="img-responsive img-thumbnail" src="img/Forza.jpg" alt="Corrida" width="30%"></a>
        
        <hr>
        
        <div class="row">
            <div class="col-sm-4 textc"><a href="#" class="anima">Aventura</a></div>
            <div class="col-sm-4 textc"><a href="#" class="anima">Esporte</a></div>
            <div class="col-sm-4 textc"><a href="#" class="anima">Simulação</a></div>
        </div>
        
        <a href="#"><img class="img-responsive img-thumbnail" src="img/GTA.jpg" alt="Aventura" width="30%"></a>
        
        <a href="#"><img class="img-responsive img-thumbnail" src="img/PES.jpg" alt="Esportes" width="30%"></a>
        
        <a href="#"><img class="img-responsive img-thumbnail" src="img/SIMS.jpg" alt="Simulação" width="30%"></a>
    </div>

    
    
    <div class="basic container-fluid text-center topo textc">Idealizado por alunos do 2º 'D'</div>
    
    <div class="topo"></div>
</body>
</html>