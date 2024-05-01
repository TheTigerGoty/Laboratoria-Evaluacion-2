import React from 'react'

export const Navbar = () => {
    return (
        <div className='flex space-x-56 items-center p-12 ml-36'>
            <div className='flex items-center space-x-4'>
                <img src="./../../assets/Logo.webp" alt="Logo" />
                <h1 className='text-2xl font-bold'>Nexcent</h1>
            </div>
            <div className='flex space-x-24 font-medium '>
                <a className='hover:text-green-600' href='https://www.google.com.pe'>Home</a>
                <a className='hover:text-green-600'>Service</a>
                <a className='hover:text-green-600'>Feature</a>
                <a className='hover:text-green-600'>Product</a>
                <a className='hover:text-green-600'>Testimonial</a>
                <a className='hover:text-green-600'>FAQ</a>
            </div>
        </div>

    )
}
