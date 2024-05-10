import React from 'react';
import soundFile from './../../../assets/sound/maullido.mp3';
import soundFile2 from './../../../assets/sound/maullido2.mp3';
import soundFile3 from './../../../assets/sound/maullido3.mp3';


export class Navbar extends React.Component {

    // Función para reproducir el primer sonido
    reproducirSonido1 = () => {
        const audio = new Audio(soundFile);
        audio.play();
    }

    // Función para reproducir el segundo sonido
    reproducirSonido2 = () => {
        const audio = new Audio(soundFile2);
        audio.play();
    }

    // Función para reproducir el tercer sonido
    reproducirSonido3 = () => {
        const audio = new Audio(soundFile3);
        audio.play();
    }

    render() {
        return (
            <div className='flex items-center pl-20 pt-20 merri-sub text-2xl relative z-50'>
                <img src="./../../../assets/Logo.webp" alt="Logo" className='w-[134px] h-[134px]' />
                <div className='flex ml-[72px] space-x-6'>

                    <div
                        onClick={() => {
                            this.props.onNavigateToSlider();
                            this.reproducirSonido1();
                        }} // OnClick es un evento de React que se activa cuando se hace click en un elemento en especifico
                        // this.props es un objeto que contiene todos las propiedades pasadas al componente onNavigateToSlider
                        
                        className='color1 rounded-3xl w-[200px] h-[64px] flex items-center justify-center hover:color5 hover:bg-blue-400 hover:text-white'
                    >
                        <p>Razas</p>
                    </div>
                    <div 
                    onClick={() => {
                        this.props.onNavigateToModals();
                        this.reproducirSonido2();
                    }} 
                    className='color1 rounded-3xl w-[200px] h-[64px] flex items-center justify-center hover:bg-blue-400 hover:text-white'>
                        <p  >Cuidados</p>
                    </div>
                    <div
                     onClick={() => {
                        this.props.onNavigateToCarousel();
                        this.reproducirSonido3();
                    }} 
                     className='color1 rounded-3xl w-[200px] h-[64px] flex items-center justify-center hover:bg-blue-400 hover:text-white'>
                        <p >Productos</p>
                    </div>
                </div>
            </div>
        );
    }
}
