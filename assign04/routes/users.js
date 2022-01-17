const path= require('path');
const express = require ('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/users',(req, res, next) =>{
    res.render('users', { pageTitle: 'Users-Page!!'});


});

module.exports = router;