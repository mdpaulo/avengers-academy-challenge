module.exports.getall = function(application,request,response){
    var connection = application.config.database();
    var heroModel = new application.api.src.models.HeroDAO(connection);

    heroModel.getAllHeros(function(error,result){
        if(error){
            response.status(500).send(error);    
        }
        response.status(200).send(result);
    });
}