const express = require('express');
const router = express.Router();
const ServiceController = require('../controllers/ServiceController');
const serviceController = new ServiceController();

// url base = '/service'
router.get('/', serviceController.getAllServices);
router.post('/', serviceController.createService);


module.exports = router;
