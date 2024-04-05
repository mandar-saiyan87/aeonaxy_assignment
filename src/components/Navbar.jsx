import React from 'react'
import pplogo from '/assets/images/PayPal-Logo.png'

function Navbar() {
  return (
    <>
      <div className='flex items-center justify-between font-Poppins px-3 py-8'>
        <div className='flex items-center gap-8'>
          <img src={pplogo} alt="logo" className='w-7' />
          <ul className='flex gap-10 text-primary font-medium'>
            <li className='cursor-pointer'>Personal</li>
            <li className='cursor-pointer'>Business</li>
            <li className='cursor-pointer'>Developer</li>
            <li className='cursor-pointer'>Help</li>
          </ul>
        </div>
        <div className='flex gap-5 items-center'>
          <button className='bg-white rounded-full border-2 border-primary text-primary px-5 py-2 active:opacity-50'>Log In</button>
          <button className='bg-primary text-white rounded-full px-5 py-2 active:opacity-75'>Sign Up</button>
        </div>
      </div>
    </>

  )
}

export default Navbar
