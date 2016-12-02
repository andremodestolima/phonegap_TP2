function pronto() {

    document.getElementById("voltaP").addEventListener("click", voltarPag, false);

    function voltarPag() {
        navigator.vibrate(1000);
        location.href = 'pag2.html';
    }






}

document.addEventListener("deviceready", pronto, false);