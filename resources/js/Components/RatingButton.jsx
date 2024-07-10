import React, { useState, useEffect } from 'react';
import axios from 'axios';


const RatingButton = ({ auth, store, storeRating, userRating }) => {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState();
  const [hoverRating, setHoverRating] = useState(0);
  const [star, setStar] = useState(0);

  useEffect(() => {
    setRating(userRating?.rate);
  }, [userRating?.rate]);

  const rate = async (stars) => {
    if (userRating) {
      await updateRating(stars);
    } else {
      await submitRating(stars);
    }
    setShowModal(false);
  };

  const submitRating = async (stars) => {
    try {
      const response = await axios.post('/rating', {
        user_id: auth.user.id,
        store_id: store.id,
        rate: stars,
      });
      setRating(response.data.rate);
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  const updateRating = async (stars) => {
    try {
      const response = await axios.put(`/rating/${userRating?.id}`, {
        rate: stars,
        store_id: store.id
      });
      setRating(response.data.rate); // Update local state with new rating
    } catch (error) {
      console.error('Error updating rating:', error);
    }
  };

  return (
    <div>
      <dialog id='my_modal_1' className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 modal">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-xl">Rate this Store</h2>
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  className={`text-4xl ${
                    star <= (hoverRating || rating) ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                  key={star}
                  onClick={() => {
                    setStar(star)
                    rate(star)
                  }}
                  onMouseEnter={() => setHoverRating(star)}
                >
                  {star <= (hoverRating || rating) ? '★' : '☆'}
                </button>
              ))}
            </div>
            <form method='dialog' className='flex justify-around'>
              <button
                className="px-4 py-2 mt-4 text-white bg-green-600 rounded-full "
                onClick={()=>
                  {
                    if(star != 0){
                      window.location.reload()
                      alert('rating berhasil dikirim')
                    }else{
                      alert('rating tidak terkirim')
                    }
                  }
                }
              >
                kirim
              </button>
              <button
                className="px-4 py-2 mt-4 text-white bg-red-600 rounded-full "
              >
                tutup
              </button>
            </form>
          </div>
        </dialog>
    </div>
  );
};

export default RatingButton;
