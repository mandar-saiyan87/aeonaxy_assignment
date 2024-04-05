import React from 'react'
import { features } from '../../utils/features'

function Section3() {
  return (
    <div className='items-center text-center py-24'>
      <div className='text-[42px] px-20'>
        Our connections, innovation, and intelligence make Paypal your strategic partner
      </div>
      <div>
        <div>
          {features.map(feature => (
            <div>
              <img src={feature.image} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section3
