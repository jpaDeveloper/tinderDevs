const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes'); //import routes

const server = express(); //created a new server

mongoose.connect('mongodb+srv://joaopedro:pedro12@cluster0-zrc4z.mongodb.net/omnistack8?retryWrites=true&w=majority', {useNewUrlParser: true});

server.use(cors());
server.use(express.json()); //server config to receive data in JSON
server.use(routes);

server.listen(3333); //selected port to listen server