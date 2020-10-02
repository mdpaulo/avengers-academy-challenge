const app = require('./config/server');
var server = require('./config/default');

app.listen(server.port,function(){
    console.info("Server Started on port: " + server.port);
});