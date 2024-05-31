import React, { useState } from 'react';
import axios from 'axios';

const RatingButton = ({ auth,store }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [rating, setRating] = useState(0);

  // console.log(store)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const rate = (stars) => {
    setRating(stars);
    submitRating(stars);
  };

  const submitRating = async (stars) => {
    try {
      const response = await axios.post('/rating', {
        user_id: auth.user.id,
        store_id: store,
        rate: stars
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  return (
    <div>
      <button className='px-4 py-1 mb-6 -mt-1 text-sm rounded-full ms-2 bg-red-500' onClick={toggleDropdown}>Rate</button>
      {showDropdown && (
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              className='px-4 py-1 mb-6 -mt-1 text-sm rounded-full ms-2 bg-yellow-500'
              key={star}
              onClick={() => rate(star)}
            >
              {star <= rating ? '★' : '☆'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RatingButton;
