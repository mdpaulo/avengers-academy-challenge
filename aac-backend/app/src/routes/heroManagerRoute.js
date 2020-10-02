module.exports = function(application){
    application.get('/hero/findall', function(request,response){
        application.app.src.entity.hero.controllers.heroManagerController.getAll(application,request,response);
    });

    application.post('/hero/findbyid', function(request,response){
        application.app.src.entity.hero.controllers.heroManagerController.getHeroById(application,request,response);
    });
    
    application.post('/hero/save', function(request, response){
        application.app.src.entity.hero.controllers.heroManagerController.saveHero(application, request, response);
    });

    application.post('/hero/update', function(request, response){
        application.app.src.entity.hero.controllers.heroManagerController.updateHero(application, request, response);
    });

    application.post('/hero/delete', function(request, response){
        application.app.src.entity.hero.controllers.heroManagerController.removeHero(application, request, response);
    });
}