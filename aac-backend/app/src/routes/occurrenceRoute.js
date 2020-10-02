module.exports = function(application){
    application.post('/occurrence/listbystatus', function(request, response){
        application.app.src.entity.ocurrence.controllers.OccurrenceController.listOccurrencesByStatus(application,request,response);
    });
}