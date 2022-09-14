const router = require('express').Router();

const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const detailsController = require('../controllers/detailsController');
const createCubeController = require('../controllers/createCubeController');
const accessoryCreateController = require('../controllers/accessoryCreateController');
const authController = require('../controllers/authController');

router.use('/create', createCubeController);
router.use('/accessory', accessoryCreateController);
router.use('/', homeController);
router.use('/about', aboutController);
router.use('/details', detailsController);
router.use('/auth', authController);

module.exports = router;