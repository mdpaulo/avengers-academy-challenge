const bodyParser = require('body-parser');
const { initDatabaseConnection } = require('./configs/mongoDbConfig');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
initDatabaseConnection();

module.exports = app;