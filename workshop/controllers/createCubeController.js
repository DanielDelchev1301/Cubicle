const Cube = require('../models/Cube');
const router = require('express').Router();

router.post('/cube', (req, res) => {
    Cube.create(req.body);
    res.redirect('/');
});

router.get('/', (req, res) => {
    res.render('create');
});

module.exports = router;