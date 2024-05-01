import React from 'react'

export const Hero = () => {
  return (
    <div className='flex justify-center container mx-auto items-center'>
      <div className='space-y-10 w-1/2'>
        <h2 className='text-7xl font-bold'>Lessons and insights
          <span className='text-green-500'> from 8 years</span>
        </h2>
        <p>Where to grow your business as a photographer: site or social media?</p>
      </div>
      <img src="./../../assets/Banner.webp" alt="Banner" className='w-1/3' />
    </div>
  )
}
