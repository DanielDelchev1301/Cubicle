const handlebars = require('express-handlebars');

module.exports = (server) => {
    server.engine('hbs', handlebars.engine({
        extname: 'hbs'
    }));
    server.set('view engine', 'hbs');
};