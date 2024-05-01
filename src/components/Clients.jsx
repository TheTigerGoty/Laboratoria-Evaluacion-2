import React from 'react'

export const Clients = () => {
  return (
    <div className='flex flex-col items-center space-y-8'>
      <h3 className='text-3xl font-bold text-gray-400'>Our Clients</h3>
      <p>We have been working with some Fortune 500+ clients</p>

      <div className='flex items-center justify-center space-x-48 w-8'>
        <img src="./../../assets/clients/First Icon.webp" alt="Icon" />
        <img src="./../../assets/clients/Second Icon.webp" alt="Icon" />
        <img src="./../../assets/clients/Third Icon.webp" alt="Icon" />
        <img src="./../../assets/clients/Fourth Icon.webp" alt="Icon" />
        <img src="./../../assets/clients/Fifth Icon.webp" alt="Icon" />
        <img src="./../../assets/clients/Sixth Icon.webp" alt="Icon" />
      </div>
    </div>
  )
}
