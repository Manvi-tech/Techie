
const express = require('express');
const router = express.Router();
const passport = require('passport')
const userController = require('../controllers/user_controller');

router.post('/signup',userController.signup);
router.post('/signin',passport.authenticate(
    'local',
    {failureRedirect: '/user/userPage'},
  ), userController.signin);

router.get('/signout',userController.signout);
router.get('/signinPage',userController.signinPage);
router.get('/signupPage',userController.signupPage);


module.exports = router;