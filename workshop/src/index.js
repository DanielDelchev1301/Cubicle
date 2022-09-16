const routes = require('./routes');
const express = require('express');
const { initializeDataBase } = require('../config/dataBase');
const cookieParser = require('cookie-parser');

const server = express();

require('../config/handlebars')(server);

server.use('/static', express.static('static'));
server.use(cookieParser());
server.use(express.urlencoded({extended: false}));

server.use(routes);

initializeDataBase()
    .then(() => {
        server.listen(5000, () => console.log('Server listening on port 5000...'));
    })
    .catch((err) => {
        console.log(`Cannot connect to DB: ${err}`);
    });