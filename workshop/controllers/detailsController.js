const Cube = require('../models/Cube');
const {getCube} = require('../services/cubeService');
const {getAll} = require('../services/accessoryService');
const {attachAccessory} = require('../services/cubeService');
const router = require('express').Router();

router.post('/attach/:id', (req, res) => {
    const accessoryId = req.body.accessory;
    attachAccessory(req.params.id, accessoryId)
    res.redirect(`/details/${req.params.id}`);
});

router.get('/attach/:id', (req, res) => {

    getCube(req.params.id)
        .then(cube => {

            getAll()
                .then(accessories => {
                    res.render('accessories/attach', { cube, accessories });
                })
                .catch(err => console.log(err));

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