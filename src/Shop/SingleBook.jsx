import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const {_id,bookTitle,imageURL}=useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24 flex'>
        <img src={imageURL} alt="" className='h-96' />
        <h1 className='ml-6 font-bold text-5xl '>{bookTitle}</h1>
    </div>
  )
}

export default SingleBook