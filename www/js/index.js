function pronto() {

    document.getElementById("proximaP").addEventListener("click", proximaPag, false);

    function proximaPag() {
        navigator.vibrate(1000);
        location.href = 'pag2.html';
    }


}


document.addEventListener("deviceready", pronto, false);