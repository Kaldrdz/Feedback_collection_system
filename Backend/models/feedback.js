
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: String,
  contact: String,
  email: String,
  rating: Number
});

module.exports = mongoose.model('Feedback', feedbackSchema);
