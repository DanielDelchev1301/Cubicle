const router = require('express').Router();
const {createAccessory} = require('../services/accessoryService');

router.post('/create', (req, res) => {
    createAccessory(req.body)
        .then(accessory => {
            
            res.redirect('/');
        })
        .catch(err => console.log(err));
});

router.get('/', (req, res) => {
    res.render('accessories/create');
});

module.exports = router;