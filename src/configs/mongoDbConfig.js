const appConfig = require('./appConfig');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

function initDatabaseConnection(){
    mongoose.connect(appConfig.mongoDB.url, {useNewUrlParser: true})
    .then(() => {
        console.log("Connect to mongoDB");
    }).catch(err => {
        console.log('Failed to connect on mongoDb - Closing connection', err);
        process.exit();
    });
}

module.exports = { initDatabaseConnection } 
