
import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    rating: '',
    feedback: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Contact No.:</label>
          <input
            type="tel"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            className="input"
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
          <label className="label">Feedback:</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="input"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="button">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
