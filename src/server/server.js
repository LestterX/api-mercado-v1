const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
require('dotenv/config');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.set('view engine', 'ejs');
server.set('views', './src/server/views');

server.use(routes); //Tem que estar abaixo do bodyParser

module.exports = server;