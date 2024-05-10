import React from 'react'

export const Card = ({icon, title}) => {
    return (
        <div className='color3 flex flex-col items-center justify-center rounded-[16px] w-[450px] h-[450px] z-10 drop-shadow-2xl	'>
            {icon}
            <h3 className='mt-[30px] w-[316px] h-[80px] merri-sub text-2xl text-center'>{title}</h3>
        </div>
    )
}
