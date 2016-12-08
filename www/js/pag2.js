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
                fileEntry.createWriter(function (fileWriter) {
                    fileWriter.onwriteend = function() {
                        alert("Arquivo criado com sucesso!!");
                        //alert("fileEntry:"+fileEntry);
                        //alert("fileEntry.toURL:"+fileEntry.toURL());
                        //alert("imageData:"+imageData);
                        //document.getElementById('imagem').src = fileEntry.toURL();
                        ler_arquivo(fileEntry);
                    };
                    fileWriter.onerror = function(erro) {
                        alert("Erro ao criar o arquivo: " + erro.toString());
                    };
                    fileWriter.write("data:image/jpeg;base64,"+imageData);
                });
           }, arquivoErro);
        }, fileErro);
    }

    function ler_arquivo(fileEntry){
        fileEntry.file(function (arquivo){
            var reader = new FileReader();
            reader.onloadend = function(){ alert("Successful file read: " + this.result); };
            alert(arquivo);
            alert(reader.readAsText(arquivo));
            alert("pronto!!FIm!!");
            //document.getElementById('imagem').src = fileEntry.toURL(); //"data:image/jpeg;base64," + fileEntry.toURL();
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