module.exports.getAll = function(application,request,response){
    var connection = application.config.database();
    var heroModel = new application.app.src.entity.hero.models.HeroDAO(connection);

    heroModel.getAllHeros(function(error,result){
        if(error){
            response.status(500).send(error);    
        }
        response.status(200).send(result);
    });
}

module.exports.getHeroById = function(application,request,response){
    var connection = application.config.database();
    var heroModel = new application.app.src.entity.hero.models.HeroDAO(connection);

    heroModel.getById(request.body.id, function(error,rows){
        if(error){
            response.status(500).send(error);
        }
        response.status(200).send(rows);
    });
}

module.exports.saveHero = function(application,request,response){
    var connection = application.config.database();
    var heroModel = new application.app.src.entity.hero.models.HeroDAO(connection);
    
    heroModel.saveHeroInfo(request.body,function(error, result){
        if(error){
            response.status(500).send(error);
        }
        response.status(200).send({message:"Ok",heroid:result.insertId});
    });
}

module.exports.updateHero = function(application,request,response){
    var connection = application.config.database();
    var heroModel = new application.app.src.entity.hero.models.HeroDAO(connection);

    heroModel.getById(request.body.id, function(error,rows){
        if(error){
            response.status(500).send(error);
        }
        
        if(rows.length == 1){
            heroModel.updateHeroInfo(request.body, function(error){
                if(error){
                    response.status(501).send(error);
                }        
                response.status(200).send({message:"Ok"});
            });
        }else{
            response.status(404).send({message:"Not found"});
        }
    });
}
    
module.exports.removeHero = function(application,request,response){
    var connection = application.config.database();
    var heroModel = new application.app.src.entity.hero.models.HeroDAO(connection);

    heroModel.getById(request.body.id, function(error,rows){
        if(error){
            response.status(500).send(error);
        }

        if(rows.length == 1){
            heroModel.deleteHeroInfo(request.body.id, function(error,result){
                if(error){
                    response.status(500).send(error);
                }
                console.log(result);        
                response.status(200).send({message:"Ok"});
            });
        }else{
            response.status(404).send({message:"Not found"});
        }
    });
}