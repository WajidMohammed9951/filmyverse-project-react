import React from 'react'

const Reviews = () => {
  return (
    <div className='mt-6 w-full text-xl'>
      <input
      placeholder='share your thoughts...'
      className='p-2 w-full outline-none bg-slate-900'
      />
      <button className='bg-green-500 p-1 w-full mt-1'>share</button>
    </div>
  )
}

export default Reviews