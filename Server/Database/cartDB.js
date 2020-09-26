const mongoose = require('mongoose');
const cartCon = mongoose.createConnection('mongodb://localhost/cart'); // to connect to multiple databases at once
mongoose.set('useUnifiedTopology', true); // to rid of deprication errors
mongoose.set('useNewUrlParser', true); // to rid of deprication error

const cart = mongoose.Schema({
  Id: { type : Number, unique : true, required : true},
  Title: String,
  Price: Number,
  Quantity: Number,
  Size: String,
  Image: String,
})

const CartItem = cartCon.model('CartItem', cart);

module.exports.CartItem = CartItem;