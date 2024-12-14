import React from 'react'

const RecentlyAdded = () => {
  return (
    <>
      <div className='mt-8 px-4'>
        <h4 className='text-3xl text-yellow-100'>Recently Added Books </h4>
      </div>
      <div className='flex gap-5'>
        <div className="card bg-base-100 w-96 shadow-xl mt-10">
          <figure>
            <img
              className='h-80 pl-2 justify-center'
              src="https://images.meesho.com/images/products/323159423/s6q7e_512.webp"
              alt="Book" />
          </figure>
          <div className='bg-zinc-800 m-1 rounded-xl'>
            <h2 className='text-yellow-100 pl-2' >Shoes!</h2>
            <p className='text-yellow-100 pl-2'>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className='pl-5 px-4 py-2 border-blue-600 font-medium rounded-lg hover:bg-white hover:text-zinc-800 transition-all duration-300'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl mt-10">
          <figure>
            <img
              className='h-80 w-72 pl-6 justify-center'
              src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqUfx5iUAKvyTBrPgth63eD8BO-YKVuPDz_29qIXx_mE4SkZ8a_4QLUl-admSdQ7T7ApH8JsUc6pnDPerX54pwrXO-3VUeCq4GvJxtjF72"
              alt="Shoes" />
          </figure>
          <div className='bg-zinc-800 m-1 rounded-xl'>
            <h2 className='text-yellow-100 pl-2' >Shoes!</h2>
            <p className='text-yellow-100 pl-2'>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className='pl-5 px-4 py-2 border-blue-600 font-medium rounded-lg hover:bg-white hover:text-zinc-800 transition-all duration-300'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl mt-10">
          <figure>
            <img
              className='h-80 pl-2 justify-center'
              src="https://images.meesho.com/images/products/323159423/s6q7e_512.webp"
              alt="Book" />
          </figure>
          <div className='bg-zinc-800 m-1 rounded-xl'>
            <h2 className='text-yellow-100 pl-2' >Shoes!</h2>
            <p className='text-yellow-100 pl-2'>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className='pl-5 px-4 py-2 border-blue-600 font-medium rounded-lg hover:bg-white hover:text-zinc-800 transition-all duration-300'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecentlyAdded
