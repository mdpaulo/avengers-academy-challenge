var mysql = require('mysql');

var connMySQL = function(){
    return mysql.createConnection({
        host:'localhost',
        user:'avengers_app',
        password: '123456789',
        database: 'avengers_academy'
    });
}

module.exports = function(){
    console.log('Autoload database resources');
    return connMySQL;
}