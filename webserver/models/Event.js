var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  tags: [String],
  attendees: [String],
  user: String,
  location: String,
  nsfw: Boolean,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Event', EventSchema);