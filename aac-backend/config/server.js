const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));

consign()
.include('./api/src/routes')
.then('./config/database.js')
.then('./api/src/models')
.then('./api/src/controllers')
.into(app);

module.exports = app;