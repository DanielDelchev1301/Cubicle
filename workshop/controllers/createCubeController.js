const cubeService = require('../services/cubeService');
const router = require('express').Router();

router.post('/cube', async (req, res) => {
    await cubeService.create(req.body);
    res.redirect('/');
});

router.get('/', (req, res) => {
    res.render('create');
});

module.exports = router;