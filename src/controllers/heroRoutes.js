const heroController = require('./heroController');

module.exports = (app) => {
    app.get('/alive', (req, res) => { res.status(200).send(true)});
    app.post('/hero', heroController.create);    
    app.get('/hero', heroController.findAll);    
    app.get('/hero/:id', heroController.findById);    
    app.put('/hero/:id', heroController.update);    
    app.delete('/hero/:id', heroController.delete);
}