function pronto() {

    document.getElementById("voltaP").addEventListener("click", voltarPag, false);
    document.getElementById("salvar").addEventListener("click", salvar, false);

    function voltarPag() {
        navigator.vibrate(200);
        location.href = 'pag2.html';
    }

    function salvar(){
        navigator.vibrate(200);
        navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:1});
        function captureSuccess(mediaFile) {
            document.getElementById("audioOgg").src = mediaFile.fullPath;
            document.getElementById("audioMpeg").src = mediaFile.fullPath;
            alert("Gravado!!"+fullPath);
        }
    }
}

document.addEventListener("deviceready", pronto, false);