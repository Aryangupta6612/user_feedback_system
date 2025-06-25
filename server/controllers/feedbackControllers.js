const Feedback = require("../model/feedback");

const createFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.create(req.body);
    res.status(201).json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getFeedback = async (req, res) => {
  try {
    const { category, sortBy = 'createdAt' } = req.query;
    const filter = category ? { category } : {};
    const feedbacks = await Feedback.find(filter).sort({ [sortBy]: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createFeedback, getFeedback };