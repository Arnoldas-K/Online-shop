var express = require('express');
var router = express.Router();
var passport = require('passport');
var csrf = require('csurf');
var mongoose = require('mongoose');

var csrfProtection = csrf();
router.use(csrfProtection); // all routes protected by csrfProtection

router.get('/profile', isLoggedIn, function(req, res, next){
  console.log("a");
  res.render('user/profile');
});

router.get('/logout', isLoggedIn, function(req, res, next){
  req.logout();
  res.redirect('/');
});

router.use('/', notLoggedIn, function(req, res, next){
  console.log("b");
  next();
});

router.get('/signup', function(req, res, next){
  var messages = req.flash('error');
  res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length});
});

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true
}));

router.get('/signin', function(req, res, next){
  var messages = req.flash('error');
  res.render('user/signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length});
});

router.post('/signin', passport.authenticate('local.signin', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signin',
  failureFlash: true
}));

module.exports = router;

function isLoggedIn(req, res, next){
  console.log("a");
  if(req.isAuthenticated()){
    return next(); // continue
  }
  res.redirect('/');
}

function notLoggedIn(req, res, next){
  console.log("d");
  if(!req.isAuthenticated()){
    return next(); // continue
  }
  res.redirect('/');
}
