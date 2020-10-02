module.exports = function(application){
    application.get('/', function(request,response){
        response.status(200).send({
            sucess:'true',
            message:'Service is Running'
        });
    });
};