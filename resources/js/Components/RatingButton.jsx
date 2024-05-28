import React, { useState } from 'react';

const RatingButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [rating, setRating] = useState(0);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const rate = (stars) => {
    setRating(stars);
    submitRating(stars);
  };

  return (
    <div>
      <button className='px-4 py-1 mb-6 -mt-1 text-sm rounded-full ms-2 bg-red-500' onClick={toggleDropdown}>Rate</button>
      {showDropdown && (
        <div >
          {[1, 2, 3, 4, 5].map((star) => (
            <button className='px-4 py-1 mb-6 -mt-1 text-sm rounded-full ms-2 bg-green-yellow-500'  key={star} onClick={() => rate(star)}>
              {star <= rating ? '★' : '☆'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RatingButton;
