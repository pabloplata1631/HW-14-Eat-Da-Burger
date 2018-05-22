var express = require('express');   //2nd step after packages installed --- ref to express and xpress.Router();
var router = express.Router();

router.get('/', function(req,res){  //basic set up LOL - rendering index in views folder - 
    res.render('index');
})

module.exports = router;