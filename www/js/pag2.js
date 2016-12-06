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

    function sucessoFoto(imageData){
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs){
            fs.root.getFile("fotoPerfil.img", { create: true, exclusive: false }, function(fileEntry){

                alert("imageData:"+imageData+"   fs:"+fs+"   fileEntry:"+fileEntry);



                fileEntry.createWriter(function (fileWriter) {
                    fileWriter.onwriteend = function() {
                        alert("Arquivo criado com sucesso!!");
                        readFile(fileEntry);
                    };
                    fileWriter.onerror = function(erro) {
                        alert("Erro ao criar o arquivo: " + erro.toString());
                    };
                    // If data object is not passed in, create a new Blob instead.
                    if(!imageData){
                        imageData = new Blob(['some file data'], { type: 'text/plain' });
                    }
                    fileWriter.write(imageData);
                });
                document.getElementById('imagem').src = fileEntry.toURL();
            }, arquivoErro);
        }, fileErro);
    }

    function fileErro(message){
        alert('Erro no file: ' + message);
    }

    function arquivoErro(message){
        alert('Erro no arquivo: ' + message);
    }

    function cameraErro(message) {
        alert('Erro na camera: ' + message);
    }

    function tirarFoto()
        {navigator.vibrate(200);
         navigator.camera.getPicture(sucessoFoto, cameraErro, {
         quality: 100,
         destinationType: Camera.DestinationType.FILE_URI, // NATIVE_URI, DATA_URL
         sourceType: Camera.PictureSourceType.CAMERA,       //Camera.PictureSourceType.PHOTOLIBRARY
         encodingType: Camera.EncodingType.JPEG,           //JPG, PNG
         mediaType: Camera.MediaType.PICTURE,		  //VIDEO, ALLMEDIA
         allowEdit: false,
         correctOrientation: true,
        });}

    function escolherFoto()
        {navigator.vibrate(200);
         navigator.camera.getPicture(sucessoFoto, cameraErro, {
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