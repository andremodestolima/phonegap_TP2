
function teste(){}


function pronto() {



    function proximaPag() {
        navigator.notification.alert("estou aqui!!!", teste);
        navigator.vibrate(1000);
        location.href = 'pag2.html';
    }


}


document.addEventListener("deviceready", pronto, false);