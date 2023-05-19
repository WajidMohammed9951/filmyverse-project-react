import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { reviewsRef, db } from '../firebase/Firebase';
import { addDoc, doc, updateDoc, query, where, getDocs } from 'firebase/firestore';
import { TailSpin, ThreeDots } from 'react-loader-spinner';
import swal from 'sweetalert';


const Reviews = ({ id, prevRating, userRated }) => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [form, setForm] = useState("");
  const [data, setData] = useState([]);
  // const [newAdded, setNewAdded] = useState(0);



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

      })
      setRating(0);
      setForm("");
      // setNewAdded(newAdded + 1);

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
  useEffect(() => {
    async function getData() {
      setReviewsLoading = (true);
      let quer = query(reviewsRef, where('movieid', '==', id))
      const querySnapshot = await getDocs(quer);

      querySnapshot.forEach((doc) => {
        setData((prev) => [...prev, doc.data()])
      })
      setReviewsLoading = (false);

    }
    getData();

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
        <div className='mt-6 flex justify-center '><ThreeDots height={10} color='white' /></div>
        :
        <div className='mt-4 p-2'>
          {data.map((e, i) => {
            return (
              <div className='bg-gray-900 p-2 w-full mt-2 border-b border-gray-600' key={i}>
                <div className='flex'>
                  <p className='text-blue-800'>{e.name}</p>
                  <p>{new Date(e.timestamp).toLocaleString()}</p>
                  <ReactStars
                            size={15}
                            half={true}
                            value={e.rating}
                            edit={false}
                        />

                        <p>{e.thought}</p>
                </div>
              </div>
            )
          })}

        </div>

      }
    </div>
  )
}

export default Reviews