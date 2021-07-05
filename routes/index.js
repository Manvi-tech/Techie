
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.get('/companies',(req,res)=>{return res.render('imp-companies',{title:'Unicorns 2021'})});

router.use('/resources',require('./resources'));
router.use('/women-programs',require('./womenPrograms'));

router.use('/user',require('./user'));



module.exports = router;