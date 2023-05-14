import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { reviewsRef } from '../firebase/Firebase';
import { addDoc } from 'firebase/firestore';
import { TailSpin } from 'react-loader-spinner';
import swal from 'sweetalert';


const Reviews = ({ id }) => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState("");

  const sendReview = async () => {
    setLoading(true);

    try {
      await addDoc(reviewsRef, {
        movieid: id,
        name: "wajid",
        rating: rating,
        thought: form,
        timestamp: new Date().getTime()

      })


      swal({
        title: "review sent",
        icon: "success",
        buttons: false,
        timer: 3000
      })
    } catch (error) {
      swal({
        title: error.message,
        icon: "error",
        buttons: false,
        timer: 3000
      })
    }
    setLoading(false);

  }

  return (
    <div className='mt-6 border-t-2 border-gray-600 w-full text-xl '>
      <ReactStars
        size={30}
        half={true}
        value={rating}
        onChange={(rate) => setRating(rate)}

        className='mt-3' />
      <input
        value={form}
        onChange={(e => setForm(e.target.value))}
        placeholder='share your thoughts...'
        className='p-2 w-full outline-none bg-slate-900 mt-2'
      />
      <button onClick={sendReview} className='bg-green-500 flex justify-center p-2 w-full mt-1'>
        {loading ? <TailSpin height={20} color='white' /> : 'share'}
      </button>
    </div>
  )
}

export default Reviews