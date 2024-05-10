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
        // Estado inicial del Slider, con el indice inicial de la imagen
    }

    // Manejador de evento para el boton retroceda
    handlePrevClick = () => {

        // Decrementa el índice de inicio de la imagen, si es 0, regresa al final
        this.setState(prevState => ({ // setState es un método proporcionado por React para actualizar el estado de un componente.
            // (prevState => ({ ... })): Esto es una función flecha que toma el estado anterior del componente como argumento (prevState). Esta función se utiliza para calcular el nuevo estado basado en el estado anterior.
            startIndex: prevState.startIndex === 0 ? images.length - 1 : prevState.startIndex - 1
            // Aquí se actualiza el valor de startIndex en el estado. Si startIndex en el estado anterior es igual a 0, significa que estamos en la primera imagen del slider. En ese caso, queremos retroceder al final del array de imágenes, por lo que se establece startIndex en images.length - 1. De lo contrario, simplemente disminuimos startIndex en 1 para avanzar a la imagen anterior en el array de imágenes.
        }));
    }

    // Manejador de evento para el boton avance
    handleNextClick = () => {

        // Incrementa el índice de inicio de la imagen, si es el último, regresa al principio
        this.setState(prevState => ({
            startIndex: prevState.startIndex === images.length - 1 ? 0 : prevState.startIndex + 1
            // Si el valor actual de startIndex en el estado es igual a images.length - 1, lo que significa que estamos en la última imagen del slider, entonces queremos avanzar al principio del array de imágenes. Por lo tanto, establecemos startIndex en 0.
            // De lo contrario, es decir, si no estamos en la última imagen del slider, simplemente incrementamos startIndex en 1 para avanzar a la siguiente imagen en el array de imágenes.
        }));
    }

    render() {
        const { startIndex } = this.state;

        // Array de imágenes a mostrar en el slider, utilizando el índice de inicio
        const sliderImages = [
            images[(startIndex) % images.length],
            // Aquí, startIndex es el índice de la primera imagen que se mostrará en el slider.    % images.length se utiliza para asegurarse de que el índice esté dentro del rango de las imágenes disponibles. Si startIndex es mayor que el número total de imágenes en images, se volverá al principio de images usando la operación de módulo (%).

            images[(startIndex + 1) % images.length],
            images[(startIndex + 2) % images.length]

            // Estas líneas siguen la misma lógica que la primera línea, pero se desplazan un lugar hacia adelante en el array de imágenes. La segunda línea obtiene la imagen que sigue a la imagen en startIndex, y la tercera línea obtiene la imagen dos lugares adelante de startIndex. Nuevamente, el uso del operador % garantiza que los índices se mantengan dentro del rango de las imágenes disponibles.
        ];

        return (
            <div className='color5 my-[80px]'>
                <div className='text-center mb-[88px] pt-[80px]'>
                    <h2 className='merri-title text-5xl'>Razas de Gatos</h2>
                </div>

                <div className='flex justify-center items-center space-x-[75px]'>

                    {/* Botón de retroceso */}
                    <div className='rounded-full color4 w-[134px] h-[134px] flex items-center justify-center hover:bg-black' onClick={this.handlePrevClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="88" height="88" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
                        </svg>
                    </div>

                    {/* Renderiza las tarjetas de imagen del slider */}
                    <div className='flex space-x-[66px] mb-[80px]'>

                        {sliderImages.map((image, index) => ( 
                            //  Indica que queremos generar una lista de elementos basados en el array sliderImages utilizando el método map()
                            // (image, index): En cada iteración del map(), image representa la imagen actual en el array sliderImages, y index representa el índice de esa imagen en el array

                            // Cada componente SliderCard recibe tres propiedades
                            <SliderCard key={index} image={image} description={descriptions[(startIndex + index) % descriptions.length]} />
                            // key: Esta es una propiedad especial requerida por React para ayudar a identificar de manera única cada elemento en una lista. Aquí, utilizamos el índice del elemento en el array sliderImages como clave, ya que sabemos que cada índice es único

                            // image: Esta propiedad pasa la imagen actual del array sliderImages al componente SliderCard, que será utilizada para mostrar la imagen

                            // description: Esta propiedad pasa la descripción correspondiente a la imagen actual del slider al componente SliderCard. La descripción se obtiene del array descriptions utilizando el índice calculado (startIndex + index) % descriptions.length. Esto garantiza que cada imagen en el slider tenga su propia descripción, y que las descripciones se reciclen de manera circular si el índice se sale del rango del array descriptions
                        ))}
                    </div>

                    {/* Botón de avance */}
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
