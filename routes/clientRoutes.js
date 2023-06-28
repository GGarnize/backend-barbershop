const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientController');
const clientController = new ClientController();

router.get('/', clientController.getAllClients);
router.get('/search', clientController.getClient);
router.post('/', clientController.createClient); 
router.post('/test', clientController.testeCallback); 


module.exports = router;
