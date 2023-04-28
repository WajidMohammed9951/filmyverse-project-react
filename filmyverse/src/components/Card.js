import React, { useState } from 'react'

const Card = () => {
  const [data, setdata] = useState([
    {
      name: "Black Panther",
      Year: "2018",
      Rating: "5",
      img: "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
    },
    {
      name: "Black Panther",
      Year: "2018",
      Rating: "5",
      img: "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
    },
    {
      name: "Black Panther",
      Year: "2018",
      Rating: "5",
      img: "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
    },
    {
      name: "Black Panther",
      Year: "2018",
      Rating: "5",
      img: "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
    },
    {
      name: "Black Panther",
      Year: "2018",
      Rating: "5",
      img: "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
    },
    {
      name: "Black Panther",
      Year: "2018",
      Rating: "5",
      img: "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
    },
    {
      name: "Black Panther",
      Year: "2018",
      Rating: "5",
      img: "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
    },
    


  ])
  return (

    <div className='flex flex-wrap justify-between font-bold p-3 mt-3' >
      {data.map((e, i) => {
        return (
          <div key={i} className='Card p-1 shadow-lg cursor-pointer hover:translate-y-1 mt-6'>
            <img className='h-80' src={e.img} />
            <h1><span className='text-gray-500'>Name : </span>{e.name}</h1>
            <h1><span className='text-gray-500'>Rating : </span>{e.Rating}</h1>
            <h1><span className='text-gray-500'>Year : </span>{e.Year}</h1>
          </div>
        )
      })}
    </div>


  )
}

export default Card