import React from 'react';
import { CarouselCard } from './CarouselCard'; 

export class Carousel extends React.Component {
  render() {
    return (
      <div className='flex space-x-[66px] color5 items-center'>
        <div className='my-[116px] ml-[182px]'>
          <h4 className='w-[450px] h-[160px] merri-title text-6xl tracking-wider'>Los Mejores Productos</h4>
          <p className='w-[450px] h-[480px] mt-[40px] merri-text text-3xl tracking-wider leading-normal'>
            Descubre nuestra selección especializada de productos diseñados para mantener a tu gato sano y feliz. Desde alimentos balanceados hasta herramientas de cuidado personal, estamos comprometidos a brindar todo lo necesario para el bienestar de tu compañero felino.
          </p>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className='flex space-x-[40px] animate-marquee whitespace-nowrap'>
            <CarouselCard image={"https://i0.wp.com/cat-oh.com/wp-content/uploads/2021/10/matisse_productos.jpg?fit=500%2C500&ssl=1"} title={"Comida para Gatos"} price={"S/ 100"} />
            <CarouselCard image={"https://m.media-amazon.com/images/I/7108+mfrj6L._AC_UF1000,1000_QL80_.jpg"} title={"Rascador Esferico"} price={"S/ 75"} />
            <CarouselCard image={"https://mascotamoda.com/wp-content/uploads/2018/09/categories-rascadores-gato.jpg_category_category"} title={"Mueble para Gato"} price={"S/ 200"} />
          </div>

          <div className='flex space-x-[40px] absolute animate-marquee2 whitespace-nowrap mx-[40px]'>
            <CarouselCard image={"https://i0.wp.com/cat-oh.com/wp-content/uploads/2021/10/matisse_productos.jpg?fit=500%2C500&ssl=1"} title={"Comida para Gatos"} price={"S/ 100"} />
            <CarouselCard image={"https://m.media-amazon.com/images/I/7108+mfrj6L._AC_UF1000,1000_QL80_.jpg"} title={"Rascador Esferico"} price={"S/ 75"} />
            <CarouselCard image={"https://mascotamoda.com/wp-content/uploads/2018/09/categories-rascadores-gato.jpg_category_category"} title={"Mueble para Gato"} price={"S/ 200"} />
          </div>
        </div>
      </div>
    );
  }
}

