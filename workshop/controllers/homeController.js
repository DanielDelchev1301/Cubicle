const Cube = require('../models/Cube');
const router = require('express').Router();
const {getAll} = require('../services/cubeService');

router.get('/', (req, res) => {
    const search = req.query.search;
    const from = req.query.from;
    const to = req.query.to;
    
    getAll(search, from, to)
        .then(cubes => {
            res.render('index', { cubes });
        })
        .catch(err => console.log(err));
});

module.exports = router;