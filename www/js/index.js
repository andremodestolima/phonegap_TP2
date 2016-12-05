function pronto() {
    document.getElementById("proximaP").addEventListener("click", proximaPag, false);
    document.getElementById("texto").addEventListener("input", atualizarNome, false);
    document.getElementById("salvar").addEventListener("click", salvarNome, false);
    document.getElementById("nome").innerHTML = window.localStorage.getItem("nome");
    navigator.globalization.getPreferredLanguage(
        function(lingua){
            if(lingua.value=="pt-BR" || lingua.value=="pt" || lingua.value=="BR" ){
                document.getElementById("ola").innerHTML = "Olá Mundo!!";
            }
            else {document.getElementById("ola").innerHTML = "Hello World!!";}
        ;},
        function() {alert("Olá Hello Bonjour!!");}
    );

    function proximaPag() {
        navigator.vibrate(200);
        location.href = 'pag2.html';
    }

    function atualizarNome() {
        navigator.vibrate(60);
       document.getElementById("nome").innerHTML = document.getElementById("texto").value;
    }

    function salvarNome(){
        window.localStorage.setItem("nome",document.getElementById("texto").value);
    }
}

document.addEventListener("deviceready", pronto, false);