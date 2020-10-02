module.exports.listOccurrencesByStatus = function(application,request,response){
    var connection = application.config.database();
    var OccurrenceModel = new application.app.src.entity.ocurrence.models.OccurrenceDAO(connection);

    OccurrenceModel.getByStatus(request.body.status,function(error,rows){
        if(error){
            response.status(500).send(error);    
        }
        if(rows.length > 0){
            response.status(200).send({list:rows, empty:false});
        }else{
            response.status(200).send({notice:"No ocurrences to current status", empty:true});
        }
        
    });
}

module.exports.saveIncomingOccurrence = function(application, ocurrenceNotify){
    var connection = application.config.database();
    var OccurrenceModel = new application.app.src.entity.ocurrence.models.OccurrenceDAO(connection);

    OccurrenceModel.saveOccurrence(ocurrenceNotify, function(error){
        if(error){
            console.error("Failed to save occurrence in database! " + error);
        }else{
            console.log("Ocurrence saved!");        
        }
    });
}