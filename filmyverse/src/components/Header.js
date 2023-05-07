import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
 import { Link } from 'react-router-dom';
const Header = () => {
  return (

    
    <div className='text-3xl text-red-500  flex justify-between items-center font-bold p-3 border-b-2 border-gray-500'>
      <Link to={'/'}>  <span>Filmy<span className='text-white'>verse</span></span></Link>
     
    
    <Link to={'/addmovie'}><h1 className='text-lg  cursor-pointer flex items-center mr-1'>
      <Button className=''><AddIcon className='mr-1 '/><span className='text-white'>Add New </span> </Button></h1></Link>
    </div>
  )
}

export default Header