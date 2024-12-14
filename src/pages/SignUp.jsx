import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <div className='h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center'>
        <div className='bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6'>
          <p className='text-zinc-200 text-xl'>Sign Up</p>
          <div className='mt-4'>
            <div>
              <label htmlFor='' className='text-zinc-400'>
                Username
              </label>
              <input
                type='text'
                className='w-full bg-zinc-900 text-zinc-200 mt-2 p-2 outline-none'
                placeholder='Username'
                name='username'
                required
              />
            </div>
            <div className='mt-4'>
              <label htmlFor='' className='text-zinc-400'>
                Email
              </label>
              <input
                type='text'
                className='w-full bg-zinc-900 text-zinc-200 mt-2 p-2 outline-none'
                placeholder='xyz@example.com'
                name='email'
                required
              />
            </div>
            <div className='mt-4'>
              <label htmlFor='' className='text-zinc-400'>
                Password
              </label>
              <input
                type='Password'
                className='w-full bg-zinc-900 text-zinc-200 mt-2 p-2 outline-none'
                placeholder='Password'
                name='Password'
                required
              />
            </div>
            <div className='mt-4'>
              <label htmlFor='' className='text-zinc-400'>
                Address
              </label>
              <textarea
                className='w-full bg-zinc-900 text-zinc-200 mt-2 p-2 outline-none'
                rows={5}
                placeholder='Address'
                name='Address'
                required
              />
            </div>
            <div className='mt-4'>
              <button className='w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-white hover:text-zinc-800 transition-all duration-300'>
                SingUp
              </button>
              <p className='flex mt-4 items-center justify-center text-zinc-200 font-semibold'>
                Or
              </p>
              <p className='flex mt-4 items-center justify-center text-zinc-500 font-semibold'>
                Already have any account ? &nbsp;
                <Link to="/login" className='hover:text-blue-500'>
                  <u>LogIn</u>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 

export default SignUp
