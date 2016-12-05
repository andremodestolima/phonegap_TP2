function pronto() {

    document.getElementById("proximaP").addEventListener("click", proximaPag, false);
    document.getElementById("voltaP").addEventListener("click", voltarPag, false);

    function proximaPag() {
        navigator.vibrate(200);
        location.href = 'pag3.html';
    }

    function voltarPag() {
        navigator.vibrate(200);
        location.href = 'index.html';
    }




}

document.addEventListener("deviceready", pronto, false);