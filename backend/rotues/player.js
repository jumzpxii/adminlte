const express = require('express');
const playerController = require('../controller/playerController');
const router = express.Router();


router.get('/get',playerController.getPlayer);
router.get('/profile/:pid',playerController.getProfile);
router.post('/register',playerController.register);
router.delete('/del/:pid',playerController.delPlayer);

module.exports = router
