function pronto() {

    document.getElementById("proximaP").addEventListener("click", proximaPag, false);
    document.getElementById("texto").addEventListener("input", atualizarNome, false);

    function proximaPag() {
        navigator.vibrate(1000);
        location.href = 'pag2.html';
    }

    function atualizarNome() {
       document.getElementById("nome").innerHTML = document.getElementById("texto").value;
    }

}


document.addEventListener("deviceready", pronto, false);