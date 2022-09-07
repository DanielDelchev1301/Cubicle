const Cube = require('../models/Cube');
const {getCube} = require('../services/cubeService');
const {getAll} = require('../services/accessoryService');
const {attachAccessory} = require('../services/cubeService');
const router = require('express').Router();

router.post('/attach/:id', (req, res) => {
    const accessoryId = req.body.accessory;
    const cubeId = req.params.id;
    attachAccessory(cubeId, accessoryId)
    res.redirect(`/details/${cubeId}`);
});

router.get('/attach/:id', async (req, res) => {

    const cube = await getCube(req.params.id)
    const accessories = await getAll();
    
    res.render('accessories/attach', { cube, accessories });
});

router.get('/:id', async (req, res) => {

    const cube = await getCube(req.params.id);

    res.render('details', { cube });

});


module.exports = router;