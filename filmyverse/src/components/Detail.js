import React from 'react'
import ReactStars from 'react-stars'

const Detail = () => {
  return (
    <div className=' p-4 mt-4 flex justify-center'>
  <img className='h-[30rem]' src='https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg'/>
  <div className='ml-4 w-1/3 mt-4'>
    <h1 className='text-3xl font-bold text-gray-400'>star wars <span className='text-xl'>(2015)</span></h1>
    <ReactStars
     size={20}
     half={true}
     value={5}
     edit={false}
      />
    <p className='text-xl mt-3'>Set thirty years after Return of the Jedi, The Force Awakens follows Rey, Finn, Poe Dameron, and Han Solo's search for Luke Skywalker and their fight in the Resistance, led by General Leia Organa and veterans of the Rebel Alliance, against Kylo Ren and the First Order, a successor to the Galactic Empire,and Han Solo's search for Luke Skywalker and their fight in the Resistance, led by General Leia Organa and veterans of the Rebel Alliance, against Kylo Ren and the First Order, a successor to the Galactic Empire.</p>

  </div>
    </div>
  )
}

export default Detail