
function teste(){}


function pronto() {

    document.addEventListener("click", proximaPag, false);

    function proximaPag() {
        navigator.notification.alert("estou aqui!!!", teste);
        navigator.vibrate(1000);
        location.href = 'pag2.html';
    }


}


document.addEventListener("deviceready", pronto, false);