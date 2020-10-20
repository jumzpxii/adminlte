const express = require('express');
const teamController = require('../controller/teamController');
const router = express.Router();

router.post('/newteam',teamController.insertTeam);
router.post('/searchapi',teamController.searchApi);
router.get('/myteam',teamController.getMyteam);
router.post('/profile',teamController.getProfile);
router.delete('/del/:mid',teamController.delTeam);

module.exports = router
