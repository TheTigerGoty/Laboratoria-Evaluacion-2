import React from 'react'

export const Hero = () => {
    return (
        <div className='ml-[158px] mt-[160px]'>
            <div className='space-y-6'>
                <h1 className='merri-title text-7xl'>Mundo Felino 🐾</h1>
                <p className='merri-text text-3xl w-[656px] tracking-wider leading-relaxed'>
                    Descubre todo lo que tu amigo felino necesita para una vida feliz y saludable. Desde los mejores alimentos hasta los productos más mimados, ¡estamos aquí para consentir a tu minino como se merece!
                </p>
                <div className='flex space-x-6 merri-sub text-2xl'>
                    <a href='https://www.catfetin.com/es/michis' className='color1 w-[316px] h-20 flex justify-center items-center rounded-3xl'>Adopta un michi</a>
                </div>
            </div>
        </div>
    )
}
