const mongoose = require('mongoose');

const shelterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Shelter', shelterSchema);
