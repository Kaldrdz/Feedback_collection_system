// routes/feedbackRoutes.js

const express = require('express');
const Feedback = require('../models/Feedback');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, contact, email, rating } = req.body;
    const feedback = new Feedback({ name, contact, email, rating });
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
