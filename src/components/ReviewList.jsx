// src/components/ReviewList.js

import React from 'react';
import ReviewHighlighter from './ReviewHighlighter';

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((review) => (
        <div key={review.review_id} className="review-item">
          <h3>{review.reviewer_name}</h3>
          <p><strong>Date:</strong> {review.date}</p>
          <p><strong>Rating:</strong> {review.rating_review_score}</p>
          <p><strong>Review:</strong></p>
          <ReviewHighlighter review={review} />
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
