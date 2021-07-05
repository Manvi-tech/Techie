
const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resource_controller');

router.get('/languages',resourceController.languages);

router.get('/development/webd',resourceController.webd);
router.get('/development/ml',resourceController.ml);
router.get('/development/dl',resourceController.dl);
router.get('/development/data-science',resourceController.dataScience);
router.get('/development/android',resourceController.android);

router.get('/cp',resourceController.cp);
router.get('/core-subjects',resourceController.subjects);

module.exports = router;