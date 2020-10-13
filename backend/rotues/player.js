const express = require('express');
const playerController = require('../controller/playerController');
const router = express.Router();
const db = require('../connection/connect');


router.get('/get',playerController.getPlayer);
router.post('/register',playerController.register);
router.delete('/del/:id',playerController.delPlayer);

module.exports = router
