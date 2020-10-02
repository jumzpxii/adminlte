const express = require('express');
const teamController = require('../controller/teamController');
const router = express.Router();
const db = require('../connection/connect');

router.post('/insert',teamController.insertTeam);

router.get('/get',teamController.getIndex);


module.exports = router
