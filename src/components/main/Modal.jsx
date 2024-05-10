import React from 'react';

export class Modal extends React.Component {

  // Se ejecuta cuando el componente es montado en el DOM
  componentDidMount() {

    // Bloquea el desplazamiento de la página al abrir el modal
    document.body.style.overflow = 'hidden';
  }

  // Se ejecuta justo antes de que el componente sea desmontado y destruido
  componentWillUnmount() {

    // Restaura el desplazamiento de la página al cerrar el modal
    document.body.style.overflow = 'unset';
  }

  render() {
    const { image, title, text, onClose } = this.props;
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={onClose}>
        <div className="colorPage p-5 rounded-lg">
          <img src={image} alt="Modal" />
          <div className='space-y-4 flex flex-col items-center justify-center'>
            <h3 className='merri-title text-xl mt-6 text-center'>{title}</h3>
            <p className='w-[730px] merri-text leading-relaxed '>
              {text}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
