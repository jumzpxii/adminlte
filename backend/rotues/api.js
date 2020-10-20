const express = require('express');
const apiController = require('../controller/apiController');
const router = express.Router();


router.post('/distan',apiController.distanX);
router.post('/zone',apiController.zoneX);
router.post('/speed',apiController.speedX);


module.exports = router
