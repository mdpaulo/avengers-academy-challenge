const express = require('express');
const consign = require('consign');

var app = express();

app.use(express.urlencoded( {extended: true} ));
app.use(express.json());

consign()
.include('./app/src/routes')
.then('./config/database.js')
.then('./app/src/entity/hero/models')
.then('./app/src/entity/hero/controllers')
.then('./app/src/entity/ocurrence/models')
.then('./app/src/entity/ocurrence/controllers')
.then('./app/src/entity/ocurrence/client')
.into(app);

module.exports = app;