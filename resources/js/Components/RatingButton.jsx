import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const RatingButton = ({ auth, store, storeRating, userRating }) => {
  // const MySwal = withReactContent(Swal)
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState();
  const [hoverRating, setHoverRating] = useState(0);
  const [star, setStar] = useState(0);

  // console.log(storeRating)
  console.log(rating)

  // Set the initial rating from userRating
  useEffect(() => {
    setRating(userRating.rate);
  }, [userRating.rate]);

  const rate = async (stars) => {
    if (userRating) {
      await updateRating(stars);
      // window.location.reload(); 
    } else {
      await submitRating(stars);
      // window.location.reload();
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
      // console.log(response.data.message);
      setRating(response.data.rate);
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  const updateRating = async (stars) => {
    try {
      const response = await axios.put(`/rating/${userRating.id}`, {
        rate: stars,
        store_id: store.id
      });
      // console.log(response);
      setRating(response.data.rate); // Update local state with new rating
    } catch (error) {
      console.error('Error updating rating:', error);
    }
  };

  return (
    <div>
      <dialog id='my_modal_1' className="modal fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">Rate this Store</h2>
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
                  // onMouseLeave={() => setHoverRating(0)}
                  // onClickCapture={() => setHoverRating(star)}
                >
                  {star <= (hoverRating || rating) ? '★' : '☆'}
                </button>
              ))}
            </div>
            <form method='dialog' className='flex justify-around'>
              <button
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-full "
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
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-full "
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
