// var Item = require('../models/item');
// var mongoose = require('mongoose');
//
// mongoose.connect('localhost:27017/shop');
// var item = new Item({
//   image: "https://upload.wikimedia.org/wikipedia/en/5/5f/Call_of_Duty_4_Modern_Warfare.jpg",
//   title: "Call of Duty 4",
//   price: "10",
//   description: "Noice game"
// });
//
// var done = 0;
// for (var i = 0; i < item.length; i++) {
//   items[i].save(function(err, result) {
//       done++;
//       if (done === items.length) {
//         exit();
//       }
//     });
//   }
//
// console.log("added results");
//   function exit() {
//     mongoose.disconnect();
//   }
