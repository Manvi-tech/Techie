 

// languages
module.exports.languages = async function(req,res){
  try{
       return res.render('languageResources',{
         title:'Programming Languages'
       });
       
  }catch(err){
      console.log(err);
      return;
  }

}

// dsa, cp
module.exports.dsa = function(req,res){
  return res.render('dsaResources',{
    title:'Data Structures'
  });
}
module.exports.cp = function(req,res){
  return res.render('cpResources',{
    title:' Competitive Programming'
  });
}

// development: ml, webd, deep learnig, data science, andorid
module.exports.webd = function(req,res){
    return res.render('webd',{
      title:'Development | Web Development'
    });
}
module.exports.ml = function(req,res){
  return res.render('ml',{
    title:'Development | Machine Learning'
  });
}
module.exports.dl = function(req,res){
  return res.render('dl',{
    title:'Development | Deep Learning'
  });
}
module.exports.dataScience = function(req,res){
  return res.render('dataScience',{
    title:'Development | Data Science'
  });
}
module.exports.android = function(req,res){
  return res.render('android',{
    title:'Development | Android Development'
  });
}

// core subjects: os, dbms, cn, system design, oops
module.exports.subjects = function(req,res){
  return res.render('subjectResources',{
    title:'Core Subjects'
  });
}

