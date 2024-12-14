import React from 'react';
import Home from './pages/Home'
import Navbar from './comonents/Navbar/Navbar'
import Footer from './comonents/Footer/Footer'
import { Routes, Route } from "react-router-dom";
import AllBooks from './pages/AllBooks';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Card from './pages/Card';
import Profile from './pages/Profile';
import './App.css'

function App() {
  return (
    <section className='flex flex-col justify-between min-h-screen'>
      <div className='min-h-screen'>
        <Navbar />
        <Routes>
          <Route exet path='/' element={<Home />} />
          <Route path='/all-books' element={<AllBooks />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Card' element={<Card />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </section>
  )
}

export default App
