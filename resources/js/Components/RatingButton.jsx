import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RatingButton = ({ auth, store, storeRating, userRating }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [rating, setRating] = useState(0);

  // console.log(userRating);

  // Set the initial rating from userRating
  useEffect(() => {
    setRating(storeRating);
  }, [storeRating]);


  const toggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const rate = async (stars) => {
    if (userRating) {
      updateRating(stars);
      window.location.reload();
    } else {
      submitRating(stars);
      window.location.reload();
    }
    setShowDropdown(false); // Close dropdown after rating is submitted
  };

  const submitRating = async (stars) => {
    try {
      const response = await axios.post('/rating', {
        user_id: auth.user.id,
        store_id: store.id,
        rate: stars,
      });
      console.log(response.data.message);
      setRating(response.data.rate); // Update local state with new rating
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  const updateRating = async (stars) => {
    try {
      const response = await axios.put(`/rating/${userRating.id}`, {
        rate: stars,
      });
      console.log(response);
      setRating(response.rate);
    } catch (error) {
      console.error('Error updating rating:', error);
    }
  };

  const isOwnStore = auth.user.id === store.user_id || auth.user.is_admin;

  return (
    <div>
      <button
        className="px-4 py-1 mb-6 -mt-1 text-sm rounded-full ms-2 bg-red-500 text-white"
        onClick={toggleDropdown}
        disabled={isOwnStore}
      >
        {storeRating > 0 ? `${storeRating} / 5.0` : "belum ada rating"}
        {/* {storeRating > 0 ? `${rating} / 5` : "belum ada rating"} */}

      </button>
      {showDropdown && (
        <div className="rating-dropdown">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              className={`px-4 py-1 mb-6 -mt-1 text-sm rounded-full ms-2 ${
                star <= rating ? 'bg-yellow-500' : 'bg-gray-300'
              }`}
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
