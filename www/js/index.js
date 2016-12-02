
function teste(){}


function pronto() {

    navigator.notification.alert("estou aqui!!!", teste);

    function proximaPag() {

        navigator.vibrate(1000);
        location.href = 'pag2.html';
    }


}


document.addEventListener("deviceready", pronto, false);