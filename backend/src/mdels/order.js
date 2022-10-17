const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
   user: {type: Schema.Type.Object, ref: 'user'},
   cart: {type: Object, required: true},
   address: {type: String, required: true},
   name: {type: String, required: true},
   paymentId: {type: String, required: true}
  }
);
const Order = mongoose.model('Order', productSchema);
exports.Product = Order;
