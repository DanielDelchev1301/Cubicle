const router = require('express').Router();
const accessoryService = require('../services/accessoryService');
const {isAuth} = require('../middlewares/authMiddleware');

router.post('/create', (req, res) => {
    accessoryService.createAccessory(req.body)
        .then(accessory => {
            
            res.redirect('/');
        })
        .catch(err => console.log(err));
});

router.get('/', isAuth, (req, res) => {
    res.render('accessories/create');
});

module.exports = router;