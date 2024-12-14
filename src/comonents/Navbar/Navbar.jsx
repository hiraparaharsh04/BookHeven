import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa"
const Navbar = () => {
  const link = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "All Books",
      link: "/all-books"
    },
    {
      title: "Card",
      link: "/card"
    },
    {
      title: "Profile",
      link: "/profile"
    },
  ];
  const [MobileNav, setMobileNav] = useState("hidden")
  return (
    <>
      <nav className='z-50 relative flex bg-zinc-800 text-white px-8 py-4 items-center justify-between '>
        <Link to="/" className='flex items-center '>
          <img
            className='h-10 m-4'
            src='https://cdn-icons-png.flaticon.com/128/10433/10433049.png'
            alt='logo' />
          <h1 className='text-2xl font-semibold'>BookHeven</h1>
        </Link>
        <div className='nac-links-bookheven block md:flex items-center justify-center gap-5'>
          <div className=' hidden md:flex gap-8 text-lg'>
            {link.map((items, i) => (
              <Link to={items.link}
                className='hover:text-blue-300 transition-all duration-300' key={i}>
                {items.title}{""}
              </Link>
            ))}
          </div>
          <div className=' hidden md:flex gap-4'>
            <Link to="/LogIn" className='px-4 py-2 border border-blue-600 font-medium rounded-lg hover:bg-white hover:text-zinc-800 transition-all duration-300'>
              LogIn
            </Link>
            <Link to="/SignUp" className='px-4 py-2 bg-blue-600 font-medium rounded-lg hover:bg-white hover:text-zinc-800 transition-all duration-300'>
              SingUp
            </Link>

          </div>
          <button className=' block md:hidden text-white text-2xl hover:text-zinc-400'
            onClick={() => (
              MobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            )}>
            <FaGripLines />
          </button>
        </div>
      </nav>
      <div className={`${MobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}>
        {link.map((items, i) => (
          <Link to={items.link}
            className={`${MobileNav} text-white text-4xl mb-8 font-semiboldhover:text-blue-300 transition-all duration-300`}
            key={i}
            onClick={() => (
              MobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            )}
          >
            {items.title}{""}
          </Link>
        ))}

        <Link to="/LogIn" className={`${MobileNav}px-8 mb-8 text-3xl font-semibold py-2 border border-blue-600 font-medium rounded-lg text-white hover:bg-white hover:text-zinc-800  transition-all duration-300`}>
          LogIn
        </Link>
        <Link to="/SignUp" className={`${MobileNav}px-8 mb-8 text-3xl font-semibold py-2 bg-blue-600 font-medium rounded-lg hover:bg-white hover:text-zinc-800 transition-all duration-300`}>
          SingUp
        </Link>

      </div>
    </>
  )
}

export default Navbar