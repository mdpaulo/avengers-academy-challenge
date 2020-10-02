const io = require("socket.io-client");
ioClient = io.connect("https://desafio-frente.herokuapp.com");

module.exports = function(application){
    ioClient.on("occurrence", function(ocurrenceNotify){
        console.info(ocurrenceNotify);
        console.info("Received new Occurrence!");        
        /* Caso queira interromper a persistencia dos registros na base de dados basta comentar a linha a baixo*/
        application.app.src.entity.ocurrence.controllers.OccurrenceController.saveIncomingOccurrence(application,ocurrenceNotify);
    });
}