import React from 'react'

export const SliderCard = ({image, description}) => {
    return (
        <div>
            <img src={image} alt="ImageCardSlider" className='w-[408px] h-[791px] object-cover rounded-[32px] shadow-xl' />
            <p className='merri-sub w-[408px] h-[244px] flex items-center justify-center color4 rounded-[32px] text-white text-4xl text-center mt-6 shadow-xl'>
                {description}
            </p>
        </div>
    )
}
