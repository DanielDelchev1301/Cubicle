const cubeService = require('../services/cubeService');
const router = require('express').Router();
const {isAuth} = require('../middlewares/authMiddleware');

router.get('/', isAuth, (req, res) => {
    res.render('create');
});

router.post('/cube', async (req, res) => {
    req.body.owner = req.user._id;

    await cubeService.create(req.body);
    res.redirect('/');
});

module.exports = router;