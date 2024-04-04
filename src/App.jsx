import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'


function App() {

  return (
    <>
      <div className='max-w-[1440px] mx-auto'>
        <Navbar />
        <HomePage />
      </div>

    </>
  )
}

export default App
