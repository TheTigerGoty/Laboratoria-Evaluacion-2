import React from 'react';
import { SliderCard } from './SliderCard';

const images = [
    "./../../../assets/SliderCard1.jpg",
    "./../../../assets/SliderCard2.webp",
    "./../../../assets/SliderCard3.jpg"
];

const descriptions = [
    "Raza Siames",
    "Raza Siberiano",
    "Raza Bombay"
];

export class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startIndex: 0
        };
    }

    handlePrevClick = () => {
        this.setState(prevState => ({
            startIndex: prevState.startIndex === 0 ? images.length - 1 : prevState.startIndex - 1
        }));
    }

    handleNextClick = () => {
        this.setState(prevState => ({
            startIndex: prevState.startIndex === images.length - 1 ? 0 : prevState.startIndex + 1
        }));
    }

    render() {
        const { startIndex } = this.state;

        const sliderImages = [
            images[(startIndex) % images.length],
            images[(startIndex + 1) % images.length],
            images[(startIndex + 2) % images.length]
        ];

        return (
            <div className='color5 my-[80px]'>
                <div className='text-center mb-[88px] pt-[80px]'>
                    <h2 className='merri-title text-5xl'>Razas de Gatos</h2>
                </div>
                <div className='flex justify-center items-center space-x-[75px]'>
                    <div className='rounded-full color4 w-[134px] h-[134px] flex items-center justify-center hover:bg-black' onClick={this.handlePrevClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="88" height="88" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
                        </svg>
                    </div>
                    <div className='flex space-x-[66px] mb-[80px]'>
                        {sliderImages.map((image, index) => (
                            <SliderCard key={index} image={image} description={descriptions[(startIndex + index) % descriptions.length]} />
                        ))}
                    </div>
                    <div className='rounded-full color4 w-[134px] h-[134px] flex items-center justify-center hover:bg-black' onClick={this.handleNextClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="88" height="88" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}
