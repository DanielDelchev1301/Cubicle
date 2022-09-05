const Cube = require('../models/Cube');

exports.index = (req, res) => {
    getAll()    
        .then(cubes => {
            res.render('index', { cubes });
        })
        .catch(err => console.log(err)); 
}

function getAll() {
    return Cube.find().lean();
}