const Cube = require('../models/Cube');

exports.index = (req, res) => {
    const id = req.params.id;

    getCube(id)
        .then(cube => {
            res.render('details', { cube });
        })
        .catch(err => console.log(err));
    
};

function getCube(id) {
    return Cube.findById(id).lean();
}