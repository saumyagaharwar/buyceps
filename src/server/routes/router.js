var express = require('express');
var router = express.Router();
var user = require('../controller/user.server.controller');

router.get('/', function(req, res, next) {
    res.send('Server is running');
});

router.post('/users', user.register);
router.post('/authenticate', user.signIn);

module.exports = router;