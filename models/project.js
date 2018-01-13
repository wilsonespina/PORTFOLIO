const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  name: { type: String },
  url: { type: String }
});

module.exports = mongoose.model('Project', projectSchema);
