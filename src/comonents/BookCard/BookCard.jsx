import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({data}) => {
    console.log(data);
  return (
    <>
        <Link>
            <div className='bg-zinc-800 rounded p-4 flex flex-col'>
                <div className='bg-zinc-800 rounded flex items-center justify-center'>
                    <img src='{data.url}' alt='/' className='h-[25vh]' />
                    <h2>{data.title}</h2>
                </div>
            </div>
        </Link>
    </>
  )
}

export default BookCard
