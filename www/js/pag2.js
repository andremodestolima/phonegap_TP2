function pronto() {
    document.getElementById("proximaP").addEventListener("click", proximaPag, false);
    document.getElementById("voltaP").addEventListener("click", voltarPag, false);
    document.getElementById("tirarFoto").addEventListener("click", tirarFoto, false);
    document.getElementById("escolherFoto").addEventListener("click", escolherFoto, false);

    function proximaPag() {
        navigator.vibrate(200);
        location.href = 'pag3.html';
    }

    function voltarPag() {
        navigator.vibrate(200);
        location.href = 'index.html';
    }

    function sucessoTirarFoto(imageData) {
        document.getElementById('imagem').src = "data:image/jpeg;base64," + imageData;
    }

    function sucessoAcharFoto(imagePath) {
        document.getElementById('imagem').src = imagePath;
    }

    function cameraError(message) {
        alert('Failed because: ' + message);
    }

    function tirarFoto()
        {navigator.camera.getPicture(sucessoTirarFoto, cameraError, {
         quality: 100,
         destinationType: Camera.DestinationType.FILE_URI, // NATIVE_URI, DATA_URL
         sourceType: Camera.PictureSourceType.CAMERA,       //Camera.PictureSourceType.PHOTOLIBRARY
         encodingType: Camera.EncodingType.JPEG,           //JPG, PNG
         mediaType: Camera.MediaType.PICTURE,		  //VIDEO, ALLMEDIA
         allowEdit: false,
         correctOrientation: true,
        });}

    function escolherFoto()
        {navigator.camera.getPicture(sucessoAcharFoto, cameraError, {
         quality: 100,
         destinationType: Camera.DestinationType.FILE_URI, // NATIVE_URI, DATA_URL
         sourceType: Camera.PictureSourceType.PHOTOLIBRARY,       //Camera.PictureSourceType.PHOTOLIBRARY
         encodingType: Camera.EncodingType.JPEG,           //JPG, PNG
         mediaType: Camera.MediaType.PICTURE,		  //VIDEO, ALLMEDIA
         allowEdit: false,
         correctOrientation: true,
         // targetHeight: 100,
         // targetWidth: 100
    });}
}

document.addEventListener("deviceready", pronto, false);