const Cube = require('../models/Cube');
const router = require('express').Router();
const {getAll} = require('../services/cubeService');

router.get('/', (req, res) => {
    getAll()
        .then(cubes => {
            res.render('index', { cubes });
        })
        .catch(err => console.log(err));
});

module.exports = router;