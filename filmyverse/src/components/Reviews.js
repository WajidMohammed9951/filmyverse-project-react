import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { reviewsRef, db } from '../firebase/Firebase';
import { addDoc,doc, updateDoc, query, where, getDocs } from 'firebase/firestore';
import { TailSpin, ThreeDots } from 'react-loader-spinner';
import swal from 'sweetalert';


const Reviews = ({ id, prevRating, userRated}) => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reviewsLoading, setreviewsLoading] = useState(false);
  const [form, setForm] = useState("");
  const [data, setData] = useState();

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

      const ref = doc(db, "movies", id);
    await updateDoc(ref, {
      rating: prevRating + rating,
      rated: userRated + 1

    } )
      setRating(0);
      setForm("");
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
  useEffect (() =>{
    async function getData() {
      setreviewsLoading = (true);
      let quer = query(reviewsRef, where('movieid', '==', id))
      const querySnapshot = await getDocs(quer);

      querySnapshot.forEach((doc) => {
        setData((prev) => [...prev, doc.data()])
    })
      setreviewsLoading = (false);
      
    }
  })

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
      {reviewsLoading ?
         <div className='mt-6 flex justify-center '><ThreeDots height={10} color='white'/></div>
      :
      <div>
        {data.map ((e, i) => {
          return(
            <div key={i}>{e.thought}</div>
          )
        })}

      </div>

      }
    </div>
  )
}

export default Reviews