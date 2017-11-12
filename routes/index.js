var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Cart = require('../models/cart');
var ItemModel = require('../models/item');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/products', function(req, res, next) {
  mongoose.model('items').find(function(err, item){
    res.render('products', { items: item});
  });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/add/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  mongoose.model('items').findById(productId, function(err, item){
    if(err) { return res.redirect('/'); }
    cart.add(item, item.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/products');
  });
});

router.get('/cart', function(req, res, next){
  if(!req.session.cart){
    return res.render('cart', {products: null});
  }
  var cart = new Cart(req.session.cart);
  res.render('cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

module.exports = router;
