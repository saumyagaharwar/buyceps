var express = require('express');
var router = express.Router();
var user = require('../models/user');

router.get('/', function(req, res, next) {
    res.send('Server is running');
});

router.post('/users', function(req, res, next) {

    var userData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    }

    user.create(userData, function(error, user) {
        if(error) {
            return next(error);
        } else {
            return res.send(user._id);
        }
    });
});

router.post('/authenticate', function(req, res, next) {

    user.authenticate(req.body.email, req.body.password, function(error, user) {
        if(error || !user) {
            var err = new Error('wrong email or password.');
            err.status = 401;
            return next(err);
        } else {
            return res.send('success');
        }
    });
});

/*function requiresLogin(req, res, next) {
    if (req.session && req.session.userId) {
      return next();
    } else {
      var err = new Error('You must be logged in to view this page.');
      err.status = 401;
      return next(err);
    }
  }

router.get('/user/:id', requiresLogin , function(req, res, next) {

    var userId = req.params.id;
    user.findById(userId)
        .exec(function(error, user) {
            if(error) {
                return next(error);
            } else {
                if(user == null) {
                    var err = new Error('Not authorized');
                    err.status = 400;
                    return next(err);
                } else {
                    return res.send('{ "name": '+user.name+', email: '+user.email);
                }
            }
        });
});

router.get('/logout', function(req, res, next) {
    if(req.session) {
        req.session.destroy(function(err) {
            if(err) {
                return next(err);
            } else {
                return res.send('success');
            }
        })
    }
})*/

module.exports = router;