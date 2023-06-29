const heroController = require('./heroController');

module.exports = (app) => {    
    app.post('/heros', heroController.create);    
    app.get('/heros', heroController.findAll);    
    app.get('/heros/:heroId', heroController.findOne);    
    app.put('/heros/:heroId', heroController.update);    
    app.delete('/heros/:heroId', heroController.delete);
}