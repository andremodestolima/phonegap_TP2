function pronto() {

    document.getElementById("voltaP").addEventListener("click", voltarPag, false);
    document.getElementById("salvar").addEventListener("salvar", voltarPag, false);

    function voltarPag() {
        navigator.vibrate(200);
        location.href = 'pag2.html';
    }

    function salvar(){
        navigator.vibrate(200);
        navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:1});
        function captureSuccess(mediaFile) {
                path = mediaFile.fullPath;
                alert("Gravado!!");
        }
    }
}

document.addEventListener("deviceready", pronto, false);