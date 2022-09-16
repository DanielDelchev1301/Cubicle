const Cube = require('../models/Cube');
const accessoryService = require('../services/accessoryService');
const cubeService = require('../services/cubeService');
const router = require('express').Router();

router.post('/attach/:id', async (req, res) => {
    const accessoryId = req.body.accessory;
    const cubeId = req.params.id;
    await cubeService.attachAccessory(cubeId, accessoryId);
    res.redirect(`/details/${cubeId}`);
});

router.get('/attach/:id', async (req, res) => {

    const cube = await cubeService.getCubePopulated(req.params.id)
    const accessories = await accessoryService.getAllAvailable(cube.accessories).lean();
    
    res.render('accessories/attach', { cube, accessories });
});

router.get('/edit/:id', (req, res) => {
    console.log(req.params.id);
    res.render('edit');
});

router.get('/:id', async (req, res) => {

    const cube = await cubeService.getCubePopulated(req.params.id);

    res.render('details', { cube });

});


module.exports = router;