import './Feedbackform.css'; 
import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState();
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!name || !contact || !email || rating === 0 || !feedback) {
      setErrors({ message: 'Please fill out all fields and provide a rating.' });
      return;
    }
    // Handle form submission (e.g., send data to backend)
    console.log('Form submitted:', { name, contact, email, rating, feedback });
    // Reset form fields and errors
    setName('');
    setContact('');
    setEmail('');
    setRating(0);
    setFeedback('');
    setErrors({});
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      {errors.message && <div className="error-message">{errors.message}</div>}
      
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="contact">Contact Number:</label>
        <input
          type="text"
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email ID:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Rating:</label>
        <StarRatings
          rating={rating}
          starRatedColor="gold"
          starEmptyColor="lightgray"
          changeRating={(newRating) => setRating(newRating)}
          numberOfStars={5}
          name="rating"
        />
      </div>

      <div className="form-group">
      <label htmlFor="feedback">Feedback:</label>
      <input
        type="text"
        id="feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)} 
        required
      />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
