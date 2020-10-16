const express = require('express');
const playerController = require('../controller/playerController');
const router = express.Router();


router.get('/get',playerController.getPlayer);
router.post('/register',playerController.register);
router.delete('/del/:id',playerController.delPlayer);

module.exports = router
