const Cube = require('../models/Cube');
const router = require('express').Router();

exports.index = (req, res) => {
    res.render('accessories/attach');
};

router.post('/attach', (req, res) => {
    res.render()
});

router.get('/', (req, res) => {
    res.render('accessories/create');
});

module.exports = router;