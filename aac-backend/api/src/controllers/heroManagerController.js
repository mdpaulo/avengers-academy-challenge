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

module.exports.saveHero = function(application,request,response){
    var connection = application.config.database();
    var heroModel = new application.api.src.models.HeroDAO(connection);

    //console.log(request.body);
    heroModel.saveHeroInfo(request.body,function(error, result){
        if(error){
            response.status(501).send(error);
        }
        response.status(200).send({message:'ok'});
    });
}