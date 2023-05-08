import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import { db } from '../firebase/Firebase';

const Detail = () => {
  const {id} = useParams();
  const {data, setData} = useState({
    title:"",
    year:"",
    description:"",
    image:""
  })
  useEffect( () => {
    async function getData() {
      const _doc = doc(db, "movie", id);
      const _data = await getDoc(_doc);
      setData(_data.data());
    }
    getData();

  })
  return (
    <div className=' p-4 mt-4 flex flex-col md:flex-row items-center md:items-start justify-center'>
  <img className='h-[30rem] block md:sticky top-24' src={data.image}/>
  <div className='md:ml-4 ml-0 md:w-1/2 mt-4'>
    <h1 className='text-3xl font-bold text-gray-400'>{data.title} <span className='text-xl'>({data.year})</span></h1>
    <ReactStars
     size={20}
     half={true}
     value={5}
     edit={false}
      />
    <p className='text-xl mt-3'>{data.description}</p>
    

  </div>
    </div>
  )
}

export default Detail