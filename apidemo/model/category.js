const mongoose = require("mongoose");
var schema = mongoose.Schema;

var categorySchema = new schema({
  productId: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  }
});
module.exports = User = mongoose.model("category", categorySchema);
