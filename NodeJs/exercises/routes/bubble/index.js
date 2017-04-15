
'use strict';

var express = require('express');
var bubble = require('./bubble');
var router = express.Router();

router.get('/', bubble.index);

module.exports = router;