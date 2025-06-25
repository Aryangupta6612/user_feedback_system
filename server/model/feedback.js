const mongoose = require("mongoose");

  const FeedbackSchema = new mongoose.Schema({
  userName: String,
  email: String,
  text: String,
  category: { type: String, enum: ['bug', 'suggestion', 'feature'], default: 'suggestion' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);