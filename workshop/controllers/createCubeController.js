const Cube = require('../models/Cube');

exports.index = (req, res) => {
    const cube = req.body;

    Cube.create(cube);
    res.redirect('/');
};