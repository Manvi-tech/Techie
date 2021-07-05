
const User = require('../models/userSchema');

module.exports.signup = async function(req,res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/user/signinPage');
            })
        }else{
            return res.redirect('back');
        }

    });
}

module.exports.signin = async function(req,res){
    // req.flash('success','You have successfully logged in');
    return res.redirect('/');
}

module.exports.signout = function(req, res){
    req.logout();
    // req.flash('success','you have logged out');
    return res.redirect('/');
}

module.exports.signinPage = async function(req,res){
    try{
        return res.render('signin',{
            title:'Student LogIn'
        });
    }
    catch(err){
        console.log(err);
         return;
    }   
}
module.exports.signupPage = async function(req,res){
    try{
        return res.render('signup',{
            title:'Student SignUp'
        });
    }
    catch(err){
        console.log(err);
         return;
    }   
}

 
