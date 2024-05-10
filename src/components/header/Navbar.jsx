import React from 'react';

export class Navbar extends React.Component {
    render() {
        return (
            <div className='flex items-center pl-20 pt-20 merri-sub text-2xl relative z-50'>
                <img src="./../../../assets/Logo.webp" alt="Logo" className='w-[134px] h-[134px]' />
                <div className='flex ml-[72px] space-x-6'>

                    <div onClick={this.props.onNavigateToSlider} className='color1 rounded-3xl w-[200px] h-[64px] flex items-center justify-center hover:color5 hover:bg-blue-400 hover:text-white'>
                        <p>Razas</p>
                    </div>
                    <div onClick={this.props.onNavigateToModals} className='color1 rounded-3xl w-[200px] h-[64px] flex items-center justify-center hover:bg-blue-400 hover:text-white'>
                        <p  >Cuidados</p>
                    </div>
                    <div onClick={this.props.onNavigateToCarousel} className='color1 rounded-3xl w-[200px] h-[64px] flex items-center justify-center hover:bg-blue-400 hover:text-white'>
                        <p >Productos</p>
                    </div>
                </div>
            </div>
        );
    }
}
