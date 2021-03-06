const mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique:true
      },
      password: {
        type: String,
        required: true,
      },
      address: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      }
  });
  module.exports = User = mongoose.model("user", userSchema);