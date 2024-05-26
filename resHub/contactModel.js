const mongoose = require("mongoose");

//setup schema
const ContactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  gender: String,
  phone: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});

// Export Contact Model
const Contact = mongoose.model("contact", ContactSchema);
module.exports = Contact;

// tambahkan metode get
module.exports.get = function (limit) {
    return Contact.find().limit(limit).exec();
};
