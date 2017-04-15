'use strict';

var express = require('express');
var fibo = require('./fibonacci');
var router = express.Router();

router.get('/:number', fibo.index);

module.exports = router;