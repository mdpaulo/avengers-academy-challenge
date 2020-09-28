const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));

consign().include('./app/src/routes')
.then('./config/dbConfig.js')
.then('./app/src/model')
.then('./app/src/controller')
.into(app);

module.exports = app;