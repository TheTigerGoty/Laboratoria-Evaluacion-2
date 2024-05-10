import React from 'react';
import { Navbar } from './components/header/Navbar';
import { Hero } from './components/header/Hero';
import { Image } from './components/header/Image';
import { Cards } from './components/header/Cards';
import { Slider } from './components/main/Slider';
import { Modals } from './components/main/Modals';
import { Carousel } from './components/main/Carousel';

export class App extends React.Component { // La clase App hereda todas las funciones de un componente de React

  constructor(props) { // El constructor se utiliza para crear una instancia de clase, con el fin de inicializar el estado y otras propiedades necesarias

    super(props); // super() se refiere al constructor de la clase base de un Componente de React, se utiliza para llamar a la clase Padre. Es necesario llamarlo para poder usar el "this"

    // Se crean referencias para los elementos a los que se desplazara la pagina
    this.carouselRef = React.createRef();
    this.sliderRef = React.createRef();
    this.modalsRef = React.createRef();
  }

  // Metodos para manejar la navegacion suave hacia los elementos
  handleNavigateToCarousel = () => { // La forma de () => {} se llama Arrow Function 
    this.carouselRef.current.scrollIntoView({ behavior: 'smooth' }); // Hace un llamado de la referencia especifica "carouselRef", el .current accedemos al elemento real del DOM que apunta la referencia. scrollIntoView es un metodo del DOM que se utiliza para que un elemento sea visible en el area de visualizacion del navegador. ({ behavior: 'smooth' }) realiza una animacion de desplazamiento suave
  };

  handleNavigateToSlider = () => {
    this.sliderRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  handleNavigateToModals = () => {
    this.modalsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    return (
      <div className='colorPage'>
        <header>
          {/* Componente Navbar que recibe funciones para la navegación */}
          <Navbar
            onNavigateToSlider={this.handleNavigateToSlider}
            onNavigateToModals={this.handleNavigateToModals}
            onNavigateToCarousel={this.handleNavigateToCarousel}
          />
          <div className='flex'>
            <Hero />
            <Image />
          </div>
          <Cards />
        </header>

        <main>
          {/* Componentes envueltos en un div con referencia para el funcionamente de la Navegacion */}
          <div ref={this.sliderRef}>
            <Slider />
          </div>
          <div ref={this.modalsRef}>
            <Modals />
          </div>
          <div ref={this.carouselRef}>
            <Carousel />
          </div>
        </main>
      </div>
    );
  }
}