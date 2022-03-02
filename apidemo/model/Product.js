const mongoose = require("mongoose");
var schema = mongoose.Schema;

var productSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  categoryId: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  manufacture_date: {
    type: Date,
    required: true,
  },
  expirey_date: {
    type: Date,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
module.exports = User = mongoose.model("product", productSchema);
