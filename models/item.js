var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  image : {type: String},
  title : {type: String},
  price : {type: String},
  description: {type: String}
}, {collection: 'items'});

module.exports = mongoose.model('items', schema);
