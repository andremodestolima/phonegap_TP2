function pronto() {

    document.getElementById("proximaP").addEventListener("click", proximaPag, false);
    document.getElementById("texto").addEventListener("input", atualizarNome, false);
    document.getElementById("salvar").addEventListener("click", salvarNome, false);
    document.getElementById("nome").innerHTML = window.localStorage.getItem("nome");
    navigator.globalization.getPreferredLanguage(
        function(lingua) {alert(lingua.value);},
        function() {document.getElementById("ola").innerHTML ="Olá Mundo!";}
    );

    function proximaPag() {
        navigator.vibrate(300);
        location.href = 'pag2.html';
    }

    function atualizarNome() {
        navigator.vibrate(100);
       document.getElementById("nome").innerHTML = document.getElementById("texto").value;
    }

    function salvarNome(){
        window.localStorage.setItem("nome",document.getElementById("texto").value);
    }
}

document.addEventListener("deviceready", pronto, false);