'use strict';

var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var user = mongoose.model('user');

exports.register = function(req, res) {
    console.log(req.body);
    var newUser = new user(req.body);
    newUser.password = bcrypt.hashSync(req.body.password, 10);
    console.log('user to save ', newUser);
    newUser.save(function(err, user) {
        if(err) {
            return res.status(400).send({
                message: err
            });
        } else {
            user.password = undefined;
            return res.json(user);
        }
    });
};

exports.signIn = function(req, res) {
    user.findOne({
      email: req.body.email
    }, function(err, user) {
      if (err) throw err;
      if (!user || !user.comparePassword(req.body.password)) {
        return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
      }
      const payload = {
        email: user.email
      };

      var token = jwt.sign(payload, 'buycepsdotcomsecret', {
          expiresIn: 1440,
      });
      return res.json({
          success: true,
          message: 'auth token',
          token: token,
          isAdmin: user.isAdmin
      });
    });
  };
  
  exports.loginRequired = function(req, res, next) {
    if (req.user) {
      next();
    } else {
      return res.status(401).json({ message: 'Unauthorized user!' });
    }
  };