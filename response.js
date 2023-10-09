// response.js
const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  question: String,
  selectedOption: String,
});

module.exports = mongoose.model('Response', responseSchema);
