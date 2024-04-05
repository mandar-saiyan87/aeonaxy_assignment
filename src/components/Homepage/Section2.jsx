import React from 'react'

function Section2() {
  return (
    <div className='flex-between bg-secondary'>
      <div className='flex-1 mx-28'>
        <p className='text-5xl leading-[3.5rem] text-left text-textmains'>PayPal is trusted by businesses and consumers around the world</p>
      </div>
      <div className='flex-1 mx-20'>
        <div className='flex border-b-2 py-14'>
          <div className='flex-1'>
            <p className='text-texttertiary text-5xl font-semibold leading-[4rem]'>400+</p>
            <p className='text-textsub text-lg'>million active customers</p>
          </div>
          <div className='flex-1'>
            <p className='text-texttertiary text-5xl font-semibold leading-[4rem]'>200+</p>
            <p className='text-textsub text-lg'>markets around the globe</p>
          </div>
        </div>
        <div className='flex py-14'>
          <div className='flex-1'>
            <p className='text-texttertiary text-5xl font-semibold leading-[4rem]'>20+</p>
            <p className='text-textsub text-lg'>years of experience</p>
          </div>
          <div className='flex-1'>
            <p className='text-texttertiary text-5xl font-semibold leading-[4rem]'>30+</p>
            <p className='text-textsub text-lg'>million merchants</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2


// < div className = 'bg-secondary flex items-center justify-between' >
//     <div className='text-5xl leading-[3.5rem] max-w-[40%] text-left text-textmains mx-20'>
//       PayPal is trusted by businesses and consumers around the world
//     </div>
//     <div className='w-full'>
//       <div className='flex items-center gap-x-20 border-b-2'>
//         <div className=''>
//           <p className='text-texttertiary text-5xl font-semibold leading-[4rem]'>400+</p>
//           <p className='text-textsub text-lg'>million active customers</p>
//         </div>
//         <div>
//           <p className='text-texttertiary text-5xl font-semibold leading-[4rem]'>200+</p>
//           <p className='text-textsub text-lg'>markets around the globe</p>
//         </div>
//       </div>
//       <div className='flex items-center gap-x-5 mt-16'>
//         <div className='w-[50%]'>
//           <p className='text-texttertiary text-5xl font-semibold leading-[4rem]'>20+</p>
//           <p className='text-textsub text-lg'>years of experience</p>
//         </div>
//         <div>
//           <p className='text-texttertiary text-5xl font-semibold leading-[4rem]'>30+</p>
//           <p className='text-textsub text-lg'>million merchants</p>
//         </div>
//       </div>
//     </div>
//   </ >