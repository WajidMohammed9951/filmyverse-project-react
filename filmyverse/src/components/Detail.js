import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/Firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Bars } from 'react-loader-spinner';
import Reviews from './Reviews';

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    year: "",
    description: "",
    image: ""
  })
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setLoading(false);
      const _doc = doc(db, "movies", id);
      const _data = await getDoc(_doc);
      setData(_data.data());
      setLoading(false);
    }
    getData();

  })
  return (
    <div className=' p-4 mt-4 flex flex-col md:flex-row items-center md:items-start justify-center'>
      {loading ? <div className='h-[26rem]   flex w-full justify-center items-center'><Bars color='white' /> </div> :
        <>
          <img className='h-96 block md:sticky top-24' src={data.image} />
          <div className='md:ml-4 ml-0 md:w-1/2 mt-4'>
            <h1 className='text-3xl font-bold text-gray-400'>{data.title} <span className='text-xl'>({data.year})</span></h1>
            <ReactStars
              size={20}
              half={true}
              value={5}
              edit={false}
            />
            <p className='text-xl mt-3'>{data.description}</p>
            <Reviews/>
          </div>
        </>
      }
    </div>
  )
}

export default Detail