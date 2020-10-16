const express = require('express');
const teamController = require('../controller/teamController');
const router = express.Router();

router.post('/newteam',teamController.insertTeam);
router.post('/searchapi',teamController.searchApi);
router.post('/addtags',teamController.addtags);


module.exports = router
