module.exports = function(application){
    application.get('/hero/findall', function(request,response){
        application.api.src.controllers.heroManagerController.getall(application,request,response);
    });

}