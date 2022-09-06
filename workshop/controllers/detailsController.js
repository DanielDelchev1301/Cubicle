const Cube = require('../models/Cube');
const {getCube} = require('../services/cubeService');
const router = require('express').Router();

router.get('/attach/:id', (req, res) => {

    getCube(req.params.id)
        .then(cube => {
            res.render('accessories/attach', { cube });
        })
        .catch(err => console.log(err));
});

router.get('/:id', (req, res) => {

    getCube(req.params.id)
        .then(cube => {
            res.render('details', { cube });
        })
        .catch(err => console.log(err));

});


module.exports = router;