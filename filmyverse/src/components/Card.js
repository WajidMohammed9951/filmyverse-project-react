import { getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Audio, ThreeDots } from 'react-loader-spinner';
import ReactStars from 'react-stars'
import { moviesRef } from '../firebase/Firebase';
import { Link } from 'react-router-dom';


const Card = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(moviesRef)
     _data.forEach((doc) => {
      setdata((prv) => [...prv, {...(doc.data()), id:doc.id}])
     })
     setLoading(false);

    };
    getData();

  }, [])
  return (
    <div className='flex flex-wrap justify-between font-bold px-3 mt-3 ' >
      {loading ? <div className=' w-full flex justify-center items-center h-96 '><ThreeDots height={40} color="white" /></div> :
        
          data.map((e, i) => {
            return (
              <Link to={`/detail/${e.id}`}><div key={i} className='ard font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-500 bg-slate-900'>
                <img className="h-70 md:h-72 p-2 " src={e.image} />
                <h1><span className='text-gray-500'>Name : </span>{e.title}</h1>
                <h1 className='flex items-center '>
                  <span className='text-gray-500 mr-1'>Rating : </span>

                  

                  <ReactStars
                    size={20}
                    half={true}
                    value={5}
                    edit={false}
                  />
                </h1>
                <h1><span className='text-gray-500'>Year : </span>{e.year}</h1>
              </div></Link>
            )
          })
        
      }
    </div>


  )
}

export default Card