const cubeService = require('../services/cubeService');
const router = require('express').Router();
const {isAuth} = require('../middlewares/authMiddleware');

router.post('/cube', async (req, res) => {
    await cubeService.create(req.body);
    res.redirect('/');
});

router.get('/', isAuth, (req, res) => {
    res.render('create');
});

module.exports = router;