import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { reviewsRef } from '../firebase/Firebase';
import { addDoc } from 'firebase/firestore';
import { TailSpin } from 'react-loader-spinner';

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  return (
    <div className='mt-6 border-t-2 border-gray-600 w-full text-xl '>
      <ReactStars
      size={30}
      half={true}
      value={rating}
      onChange={(rate) => setRating(rate)}
      
       className='mt-3'/>
      <input
      placeholder='share your thoughts...'
      className='p-2 w-full outline-none bg-slate-900 mt-2'
      />
      <button className='bg-green-500 flex justify-center p-2 w-full mt-1'>
       {loading ? <TailSpin height={20} color='white'/>  :'share'}
        </button>
    </div>
  )
}

export default Reviews