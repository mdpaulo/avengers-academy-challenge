const express = require('express');
const consign = require('consign');

var app = express();

app.use(express.urlencoded( {extended: true} ));
app.use(express.json());

consign()
.include('./api/src/routes')
.then('./config/database.js')
.then('./api/src/models')
.then('./api/src/controllers')
.into(app);

module.exports = app;