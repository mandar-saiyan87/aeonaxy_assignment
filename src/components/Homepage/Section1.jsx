import React from 'react'
import heroimg from '../../assets/images/hero-phone.png'

function Section1() {
  return (
    <>
      <div className='bg-primary px-[5.5rem] py-24 flex items-center relative'>
        <div className='max-w-[45%] text-white'>
          <h3 className='text-5xl leading-[4rem]'>Capture the full potential of commerce</h3>
          <p className='text-xl max-w-[90%] leading-9 mt-3'>PayPal helps businesses find active buyers, increase conversion across channels, and scale into new markets.</p>
          <button className='text-xl font-medium text-textsecondary bg-white px-4 py-3 rounded-full mt-12 active:opacity-45'>Contact Sales</button>
        </div>
        <div className='absolute w-[33rem] top-[4.5rem] left-[50rem] z-30'>
          <img src={heroimg} alt="hero" />
        </div>
      </div>
      <div className='bg-secondary pt-[7.5rem] cursor-pointer'>
        <div className='flex max-w-max items-center gap-4 ml-[64rem] border-[1px] border-slate-400 py-3 px-7 rounded-t-xl assistant'>
          <p className='ml-10'>PayPal Assistant</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </div>
      </div>


    </>
  )
}

export default Section1
