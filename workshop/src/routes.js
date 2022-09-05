const router = require('express').Router();

const homeController = require('../controllers/homeController');
const createController = require('../controllers/createController');
const aboutController = require('../controllers/aboutController');
const detailsController = require('../controllers/detailsController');
const createCubeController = require('../controllers/createCubeController');
const accessoryController = require('../controllers/accessoryController');
const accessoryCreateController = require('../controllers/accessoryCreateController');

router.get('/', homeController.index);
router.get('/create', createController.index);
router.get('/about', aboutController.index);
router.get('/cube/:id', detailsController.index);
router.post('/create-cube', createCubeController.index);
router.get('/accessory', accessoryController.index);
router.post('/accessory-create', accessoryCreateController.index);

module.exports = router;