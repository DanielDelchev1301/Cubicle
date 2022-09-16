const Cube = require('../models/Cube');
const {getCubePopulated} = require('../services/cubeService');
const {getAllAvailable} = require('../services/accessoryService');
const {attachAccessory} = require('../services/cubeService');
const router = require('express').Router();

router.post('/attach/:id', async (req, res) => {
    const accessoryId = req.body.accessory;
    const cubeId = req.params.id;
    await attachAccessory(cubeId, accessoryId);
    res.redirect(`/details/${cubeId}`);
});

router.get('/attach/:id', async (req, res) => {

    const cube = await getCubePopulated(req.params.id)
    const accessories = await getAllAvailable(cube.accessories).lean();
    
    res.render('accessories/attach', { cube, accessories });
});

router.get('/:id', async (req, res) => {

    const cube = await getCubePopulated(req.params.id);

    res.render('details', { cube });

});


module.exports = router;