function pronto() {
    document.getElementById("proximaP").addEventListener("click", proximaPag, false);
    document.getElementById("voltaP").addEventListener("click", voltarPag, false);
    document.getElementById("tirarFoto").addEventListener("click", tirarFoto, false);
    document.getElementById("escolherFoto").addEventListener("click", escolherFoto, false);
    foto = JSON.parse(window.localStorage.getItem("fotoPerfil"));
    lerArquivo(foto);

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
                fileEntry.createWriter(function (fileWriter) {
                    fileWriter.onwrite = function() {
                        lerArquivo(fileEntry);
                    };
                    fileWriter.onerror = function(erro) {
                        alert("Erro ao criar o arquivo: " + erro.toString());
                    };
                    fileWriter.write(imageData);
                    window.localStorage.setItem("fotoPerfil", JSON.stringify(fileEntry));
                });
           }, arquivoErro);
        }, fileErro);
    }

    function lerArquivo(fileEntry){
        fileEntry.file(function (file){
            var reader = new FileReader();
            reader.onload = function(){
                document.getElementById('imagem').src = "data:image/jpeg;base64,"+ this.result; };
            reader.readAsText(file);
        })
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
         destinationType: Camera.DestinationType.DATA_URL, // NATIVE_URI, DATA_URL, FILE_URI
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
         destinationType: Camera.DestinationType.DATA_URL, // NATIVE_URI, DATA_URL, FILE_URI
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