var express = require('express');
var router = express.Router();
var mainCollection = require('../models/model-main');

/* GET home page. */
router.get('/', function(req, res, next) {
  (async function () {
    //const mCollection = await mainCollection.find();
    //res.render('index', { title: 'pkutils.com | Index', version: mCollection });
    res.render('index', { title: 'pkutils.com | Index'});
  })();
});



module.exports = router;
