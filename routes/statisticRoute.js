const router = require('express').Router();
const statisticsController = require('../controllers/statisticController');

router.get('/', statisticsController.index);
router.post('/', statisticsController.create);

module.exports = router;