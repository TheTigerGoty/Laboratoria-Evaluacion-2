import React from 'react';
import { Navbar } from './components/header/Navbar';
import { Hero } from './components/header/Hero';
import { Image } from './components/header/Image';
import { Cards } from './components/header/Cards';
import { Slider } from './components/main/Slider';
import { Modals } from './components/main/Modals';
import { Carousel } from './components/main/Carousel';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
    this.sliderRef = React.createRef();
    this.modalsRef = React.createRef();
  }

  handleNavigateToCarousel = () => {
    this.carouselRef.current.scrollIntoView({ behavior: 'smooth' });
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