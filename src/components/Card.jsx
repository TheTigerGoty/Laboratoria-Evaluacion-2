import React from 'react'

export const Card = ({title, icon}) => {
    return (
        <div className='flex flex-col items-center text-center space-y-4 p-24 pt-8'>
            <img src={icon} alt="Icon" />
            <h4 className='text-2xl font-bold text-gray-400'>{title}</h4>
            <p>Our Membership management software provides full automation of membership renewals and payments</p>
        </div>
    )
}
