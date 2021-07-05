
const express = require('express');
const router = express.Router();
const womenController = require('../controllers/women_controller');

router.get('/',womenController.programs);

module.exports = router;

