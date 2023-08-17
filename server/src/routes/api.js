const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');


router.get('/data', dataController.getData);
router.post('/data', dataController.addData);

module.exports = router;
