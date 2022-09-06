const Cube = require('../models/Cube');

exports.getCube = (id) => {
    return Cube.findById(id).lean();
};

exports.getAll = () => {
    return Cube.find().lean();
};